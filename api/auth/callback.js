// GitHub OAuth callback handler.
// Flow:
//   1. Exchange the temporary `code` for a user access token
//   2. Fetch the authenticated user's login name
//   3. List files inside the requested template folder (via bot token)
//   4. Create a new public repo in the user's account
//   5. Push each template file into that new repo
//   6. Increment the fork count stored in data/fork-counts.json (via bot token)
//   7. Redirect the user back to the frontend with a success message

const SOURCE_OWNER = 'HuibingLin';
const SOURCE_REPO  = 'my-easy-page';
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://huibinglin.github.io/my-easy-page';

export default async function handler(req, res) {
  const { code, state, error } = req.query;

  // GitHub may return an error (e.g. user denied access)
  if (error) {
    return res.redirect(`${FRONTEND_URL}?fork_error=${encodeURIComponent(error)}`);
  }

  if (!code || !state) {
    return res.status(400).json({ error: 'Missing code or state' });
  }

  const templatePath = decodeURIComponent(state); // e.g. "simple/simple_template2"

  try {
    // ── Step 1: Exchange code for user access token ──────────────────────────
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id:     process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenRes.json();

    if (tokenData.error || !tokenData.access_token) {
      throw new Error(tokenData.error_description || 'Failed to obtain access token');
    }

    const userToken = tokenData.access_token;

    // ── Step 2: Fetch authenticated user info ─────────────────────────────────
    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'User-Agent':  'my-easy-page-bot',
      },
    });

    const user = await userRes.json();

    if (!user.login) {
      throw new Error('Could not retrieve GitHub user info');
    }

    // ── Step 3: List template files in the source repo ────────────────────────
    const botToken = process.env.GITHUB_BOT_TOKEN;

    const contentsRes = await fetch(
      `https://api.github.com/repos/${SOURCE_OWNER}/${SOURCE_REPO}/contents/${templatePath}`,
      {
        headers: {
          Authorization: `Bearer ${botToken}`,
          'User-Agent':  'my-easy-page-bot',
        },
      }
    );

    if (!contentsRes.ok) {
      throw new Error(`Template folder not found: ${templatePath}`);
    }

    const files = await contentsRes.json();

    // Keep only regular files (skip sub-directories)
    const templateFiles = files.filter(f => f.type === 'file');

    // ── Step 4: Create a new public repo in the user's account ───────────────
    const templateName = templatePath.split('/').pop(); // e.g. "simple_template2"
    const repoName     = `my-easy-page-${templateName}`;

    const createRepoRes = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
        'User-Agent':   'my-easy-page-bot',
      },
      body: JSON.stringify({
        name:        repoName,
        description: `Personal homepage template from my-easy-page (${templateName})`,
        private:     false,
        auto_init:   false,
      }),
    });

    const newRepo = await createRepoRes.json();

    // If repo already exists GitHub returns 422 – surface a clear message
    if (createRepoRes.status === 422) {
      const existingRepoUrl = `https://github.com/${user.login}/${repoName}`;
      return res.redirect(
        `${FRONTEND_URL}?fork_exists=1&repo_url=${encodeURIComponent(existingRepoUrl)}`
      );
    }

    if (!createRepoRes.ok) {
      throw new Error(newRepo.message || 'Failed to create repository');
    }

    // ── Step 5: Push each template file into the new repo ────────────────────
    for (const file of templateFiles) {
      // Download raw file content from the source repo
      const rawRes = await fetch(file.download_url);
      const rawText = await rawRes.text();

      // GitHub Contents API requires base64-encoded content
      const base64Content = Buffer.from(rawText).toString('base64');

      await fetch(
        `https://api.github.com/repos/${user.login}/${repoName}/contents/${file.name}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
            'User-Agent':   'my-easy-page-bot',
          },
          body: JSON.stringify({
            message: `Add ${file.name}`,
            content: base64Content,
          }),
        }
      );
    }

    // ── Step 6: Increment fork count in data/fork-counts.json ────────────────
    await incrementForkCount(templatePath, botToken);

    // ── Step 7: Redirect user back to the frontend with success info ──────────
    const newRepoUrl = `https://github.com/${user.login}/${repoName}`;
    return res.redirect(
      `${FRONTEND_URL}?forked=1&repo_url=${encodeURIComponent(newRepoUrl)}&template=${encodeURIComponent(templatePath)}`
    );

  } catch (err) {
    console.error('[fork-callback] Error:', err);
    return res.redirect(
      `${FRONTEND_URL}?fork_error=${encodeURIComponent(err.message)}`
    );
  }
}

// Read the current fork-counts.json, increment the given template key, and
// write the updated file back to the repo.  The SHA is required by the GitHub
// Contents API to prevent overwriting concurrent writes.
async function incrementForkCount(templatePath, botToken) {
  const apiUrl =
    `https://api.github.com/repos/${SOURCE_OWNER}/${SOURCE_REPO}/contents/data/fork-counts.json`;

  const headers = {
    Authorization: `Bearer ${botToken}`,
    'Content-Type': 'application/json',
    'User-Agent':   'my-easy-page-bot',
  };

  // Fetch the current file (we need its SHA for the subsequent update)
  const getRes  = await fetch(apiUrl, { headers });
  const getData = await getRes.json();

  if (!getRes.ok) {
    // Don't crash the whole fork flow if count update fails – just log it
    console.error('[fork-callback] Could not fetch fork-counts.json:', getData.message);
    return;
  }

  // Decode the base64 content GitHub returns
  const counts = JSON.parse(Buffer.from(getData.content, 'base64').toString('utf-8'));

  // Increment (or initialise) the counter for this template
  counts[templatePath] = (counts[templatePath] || 0) + 1;

  // Write the updated JSON back to the repo
  const putRes = await fetch(apiUrl, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      message: `chore: update fork count for ${templatePath}`,
      content: Buffer.from(JSON.stringify(counts, null, 2)).toString('base64'),
      sha:     getData.sha, // Required to update an existing file
    }),
  });

  if (!putRes.ok) {
    const putData = await putRes.json();
    console.error('[fork-callback] Could not update fork-counts.json:', putData.message);
  }
}
