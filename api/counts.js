// Returns the current fork counts for all templates.
// The counts are stored in data/fork-counts.json inside this repo and are
// read via the GitHub Contents API so no database is needed.
//
// This endpoint is called by the frontend on page load to display live counts.

const SOURCE_OWNER = 'HuibingLin';
const SOURCE_REPO  = 'my-easy-page';

export default async function handler(req, res) {
  // Allow the GitHub Pages frontend to call this endpoint cross-origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const botToken = process.env.GITHUB_BOT_TOKEN;

    const apiRes = await fetch(
      `https://api.github.com/repos/${SOURCE_OWNER}/${SOURCE_REPO}/contents/data/fork-counts.json`,
      {
        headers: {
          Authorization: `Bearer ${botToken}`,
          'User-Agent':  'my-easy-page-bot',
          // Bypass GitHub's cache so callers always get the latest counts
          'Cache-Control': 'no-cache',
        },
      }
    );

    if (!apiRes.ok) {
      return res.status(500).json({ error: 'Could not load fork counts' });
    }

    const data = await apiRes.json();

    // GitHub returns the file content as a base64-encoded string
    const counts = JSON.parse(Buffer.from(data.content, 'base64').toString('utf-8'));

    // Cache on the client for 60 seconds to avoid hammering the GitHub API
    res.setHeader('Cache-Control', 'public, max-age=60');
    return res.status(200).json(counts);

  } catch (err) {
    console.error('[counts] Error:', err);
    return res.status(500).json({ error: err.message });
  }
}
