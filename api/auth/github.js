// Redirect the user to GitHub's OAuth authorization page.
// The `state` query parameter carries the template path so we can
// retrieve it after the user returns from GitHub's consent screen.
export default function handler(req, res) {
  const { state } = req.query;

  if (!state) {
    return res.status(400).json({ error: 'Missing state (template path)' });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = process.env.GITHUB_REDIRECT_URI; // e.g. https://your-app.vercel.app/api/auth/callback

  // Request only the minimum scope needed to create a public repo on behalf of the user
  const scope = 'public_repo';

  const githubAuthUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}` +
    `&state=${encodeURIComponent(state)}`;

  res.redirect(githubAuthUrl);
}
