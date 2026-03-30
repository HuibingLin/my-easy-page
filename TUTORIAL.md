# GitHub Pages Tutorial (Step by Step)

This guide shows you exactly how to publish your own homepage with GitHub Pages.

## Who This Is For

- You have a GitHub account (or can create one)
- You want a free personal website
- You want to use one template from this project

## Step 1: Create Your Homepage Repository

1. Go to [GitHub](https://github.com) and sign in.
2. Click **New repository**.
3. Repository name:
   - Preferred: `yourusername.github.io` (replace `yourusername` with your real GitHub username)
4. Set visibility to **Public**.
5. Click **Create repository**.

When you use `yourusername.github.io`, your website URL will be:
`https://yourusername.github.io`

## Step 2: Get a Template from This Project

You can choose one template from this project and copy its files.

1. In this project, pick a template folder you like, for example:
   - `simple/simple_template7/`
   - `professional/professional_template2/`
   - `business-card/business-card_template1/`
2. Copy the template files to your new repo:
   - `index.html`
   - `style.css` (if the template has one)
   - `assets/` or image files (if used by template)

## Step 3: Edit the Template with Your Content

Open `index.html` and replace the demo content:

- Your name and title
- About/intro text
- Email and social links
- Projects, publications, or experience
- Profile image

Tip: Keep filenames and folder names simple (lowercase and no spaces).

## Step 4: Upload Files to GitHub

You can upload directly in the browser:

1. Open your new repository on GitHub.
2. Click **Add file** -> **Upload files**.
3. Drag in your edited files (`index.html`, `style.css`, images, etc.).
4. Scroll down, add a commit message like `initial homepage`.
5. Click **Commit changes**.

## Step 5: Enable GitHub Pages

1. In your repository, click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
4. Click **Save**.

GitHub will start deploying your site.

## Step 6: Open Your Website

After 1-5 minutes, visit:

- `https://yourusername.github.io`

If it does not load immediately, wait a bit and refresh.

## Step 7: Update Your Website Later

To make changes:

1. Edit files locally (or directly on GitHub).
2. Commit and push/upload updates.
3. GitHub Pages will auto-redeploy.

Usually updates appear within 1-3 minutes.

## Troubleshooting

### 1) I get 404 page not found

- Check repository name is exactly `yourusername.github.io`
- Confirm repository is Public
- Confirm `index.html` is in repo root (not inside another folder)

### 2) CSS or images are broken

- Make sure file paths in `index.html` are correct
- Check filename case (e.g. `Photo.jpg` is different from `photo.jpg`)
- Confirm referenced files were uploaded

### 3) GitHub Pages setting not available

- Refresh the repo page
- Ensure you have permission to manage settings
- Ensure repository is not empty (at least one commit)

## Optional: Use a Custom Domain

After your site is live:

1. Go to `Settings` -> `Pages`
2. Add your custom domain in **Custom domain**
3. Configure DNS records at your domain provider

## Quick Checklist

- [ ] Repository named `yourusername.github.io`
- [ ] `index.html` uploaded to root
- [ ] GitHub Pages enabled from `main` branch
- [ ] Site opens at `https://yourusername.github.io`
- [ ] All links and images work
