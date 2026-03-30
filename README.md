# My Easy Page

**Beautiful, ready-to-use personal homepage templates for everyone.**

🌐 **Live Demo:** [https://huibinglin.github.io/my-easy-page/](https://huibinglin.github.io/my-easy-page/)

📘 **Tutorial:** Click [tutorial](./TUTORIAL.md) for a step-by-step GitHub setup guide.

A collection of clean, professional HTML templates for academics, professionals, and anyone who wants a simple personal homepage. No coding knowledge required - just fork, edit, and publish!

## Why My Easy Page?

- **No coding required** - Just edit text content
- **Instant preview** - See all templates before using
- **Fully responsive** - Works perfectly on all devices
- **Self-contained** - Each template is just HTML + CSS
- **Well documented** - Clear instructions and comments in every file
- **Free forever** - Open source and free to use

## Quick Start

1. **Browse** - Visit [https://huibinglin.github.io/my-easy-page/](https://huibinglin.github.io/my-easy-page/) or open `index.html` in your browser to preview all templates
2. **Choose** - Click on a template you like
3. **Fork** - Click **Fork** to create your own GitHub repository with that template
4. **Edit** - Clone your fork locally, then open the HTML file in any text editor and replace example content with yours
5. **Publish** - Push changes and enable GitHub Pages, or deploy to your preferred hosting

That's it! No build process, no dependencies, no complicated setup.

## Project Structure

```
my-easy-page/
├── index.html                      # Gallery page (START HERE!)
├── README.md                       # This file
├── GETTING_STARTED.md              # Quick start guide
├── TUTORIAL.md                     # Step-by-step GitHub Pages tutorial
├── LICENSE                         # License file
│
├── professional/                   # Templates for professionals
│   ├── professional_template1/    # Visual-first template for designers
│   ├── professional_template2/    # Tech-focused template for developers
│   └── professional_template3/    # Professional template for PMs
│
├── simple/                         # Minimalist templates
│   ├── simple_template1/          # Academic minimalist style
│   ├── simple_template2/          # Ultra-minimal centered design
│   ├── simple_template3/          # Dark accent minimalist design
│   ├── simple_template4/          # Warm earth tone design
│   ├── simple_template5/          # (See template for details)
│   ├── simple_template6/          # (See template for details)
│   └── simple_template7/          # (See template for details)
│
├── business-card/                  # Digital business card templates
│   ├── business-card_template1/   # Modern compact business card
│   ├── business-card_template2/   # (See template for details)
│   ├── business-card_template3/   # (See template for details)
│   └── business-card_template4/   # (See template for details)
│
└── assets/                         # Shared assets
```

## Template Categories

### Professional

Designed for working professionals across industries.

| Template | Best For | Key Features |
|----------|----------|--------------|
| **Professional Template 1** | UI/UX Designers | Visual portfolio grid, Image-focused layout, Creative style |
| **Professional Template 2** | Software Engineers | Project portfolio, Skills showcase, Tech-focused design |
| **Professional Template 3** | Product Managers | Metrics & stats, Timeline layout, Product showcase |

### Simple

Minimalist templates for anyone who wants a clean online presence. Perfect for academics, researchers, and anyone who prefers simplicity.

| Template | Best For | Key Features |
|----------|----------|--------------|
| **Simple Template 1** | Academics, Researchers | Academic minimalist style, Traditional layout, Organized sections |
| **Simple Template 2** | Everyone | Ultra-minimal centered design, Generous white space, Single-column layout |
| **Simple Template 3** | Everyone | Dark accent minimalist design, Timeline layout, Bold typography |
| **Simple Template 4** | Everyone | Warm earth tone design, Card-based layout, Terracotta accents |
| **Simple Template 5-7** | Everyone | Various minimalist styles | See individual template READMEs for details |

### Business Card

Digital business card templates perfect for sharing contact information and social links.

| Template | Best For | Key Features |
|----------|----------|--------------|
| **Business Card Template 1** | Everyone | Modern compact design, Contact info, Social links, QR code support |
| **Business Card Template 2-4** | Everyone | Various business card styles | See individual template READMEs for details |

## How to Use

### Step 1: Preview Templates

Visit [https://huibinglin.github.io/my-easy-page/](https://huibinglin.github.io/my-easy-page/) or open `index.html` in your web browser to see all templates with live previews.

### Step 2: Choose Your Template

Click **Fork** on the template you like to create your own copy on GitHub, or click **Preview** to see it full-screen.

### Step 3: Get the Files

Each forked template repository contains:
- `index.html` - The webpage file
- `style.css` - The styling file
- `README.md` - Detailed instructions for that template

Clone your fork (or download it as a ZIP from GitHub) to your computer so you can edit the files locally.

### Step 4: Edit Your Content

Open `index.html` in any text editor:
- **Windows**: Notepad, Notepad++, or VS Code
- **Mac**: TextEdit, VS Code, or Sublime Text
- **Linux**: gedit, vim, or VS Code

Replace the example content with your information:
- Change names, titles, and descriptions
- Update email addresses and links
- Add your own projects, papers, or work
- Replace placeholder images with your photos

**Tip**: Look for HTML comments (marked with `<!-- -->`) that explain each section.

### Step 5: Customize Colors (Optional)

Open `style.css` to customize colors:

```css
:root {
    --primary-color: #0066FF;  /* Change this to your preferred color */
}
```

Each template's README has detailed customization instructions.

### Step 6: Add Your Photos

1. Save your photo in the same folder as the HTML file
2. Replace the placeholder image URL:
   ```html
   <img src="your-photo.jpg" alt="Your Name">
   ```

### Step 7: Test Locally

Open your edited `index.html` file in a web browser to preview your changes.

### Step 8: Publish Online

Upload your files to:

- **GitHub Pages** (Free) - [Tutorial](https://pages.github.com)
- **Netlify** (Free) - Drag and drop your folder
- **Vercel** (Free) - Simple deployment
- **Your university/company server**
- **Any web hosting service**

## Editing Guide

### Finding What to Edit

All content is in the HTML file. Look for these common elements:

```html
<!-- Headings - Your name, section titles -->
<h1>Your Name</h1>
<h2>Section Title</h2>

<!-- Paragraphs - Your bio, descriptions -->
<p>Your text here</p>

<!-- Links - Email, social media, websites -->
<a href="https://yourlink.com">Link Text</a>

<!-- Images - Profile photo, project images -->
<img src="your-image.jpg" alt="Description">
```

### Common Edits

1. **Change your name**: Find `<h1>` tags with placeholder names
2. **Update email**: Search for `mailto:` and replace the email
3. **Edit bio**: Find `<p>` tags in the About section
4. **Update links**: Replace `href="#"` with your actual URLs
5. **Add content**: Copy and paste existing blocks (like publication entries)

### Tips for Editing

- **Make small changes** and test frequently
- **Keep the HTML structure** - don't remove tags
- **Preserve indentation** for readability
- **Save a backup** before making major changes
- **Use comments** to mark your edits

## Customization Tips

### Colors

Most templates define colors at the top of the CSS file:

```css
:root {
    --primary-color: #0066FF;
    --secondary-color: #333333;
}
```

Popular color schemes:
- **Blue** (Professional): `#0066FF`
- **Purple** (Creative): `#8B5CF6`
- **Green** (Growth): `#10B981`
- **Orange** (Energetic): `#F59E0B`

### Fonts

Change the font by modifying the `font-family` in CSS:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

Popular web-safe fonts:
- Arial, Helvetica
- Georgia, Times
- Verdana, Tahoma

For custom fonts, use [Google Fonts](https://fonts.google.com).

### Adding Sections

To add a new section, copy an existing section:

```html
<section id="new-section">
    <h2>New Section Title</h2>
    <p>Your content here...</p>
</section>
```

### Removing Sections

To remove a section, delete the entire `<section>...</section>` block.

## Working with Images

### Profile Photos

**Recommended specifications:**
- Size: 400x400px minimum
- Format: JPG or PNG
- File size: Under 500KB
- Aspect ratio: Square for circular photos

**How to add:**
1. Save your photo in the template folder
2. Name it something simple (e.g., `photo.jpg`)
3. Update the HTML: `<img src="photo.jpg" alt="Your Name">`

### Project Images

For portfolios and project showcases:
- Use consistent dimensions across images
- Optimize for web (compress images)
- Use descriptive file names
- Include alt text for accessibility

## Publishing Your Page

### Option 1: GitHub Pages (Recommended)

**Free, easy, and reliable**

1. Create a GitHub account
2. Create a new repository named `username.github.io`
3. Upload your HTML and CSS files
4. Your site will be live at `https://username.github.io`

[Full Tutorial](https://pages.github.com)

### Option 2: Netlify

**Easiest drag-and-drop option**

1. Go to [netlify.com](https://netlify.com)
2. Drag your template folder onto the page
3. Get instant free hosting with HTTPS

### Option 3: University/Company Server

Many institutions provide web hosting:
- Check with your IT department
- Usually accessible at `university.edu/~username`
- Upload via FTP or web interface

### Option 4: Custom Domain

Already have a domain? Upload files to:
- Root directory for `yourdomain.com`
- Subdirectory for `yourdomain.com/homepage`

## FAQ

### Do I need to know how to code?

No! Just edit the text content in the HTML file. Basic find-and-replace is enough.

### Can I use this for commercial purposes?

Yes! All templates are free to use for personal and commercial projects.

### How do I change colors?

Open the `style.css` file and look for color codes (like `#0066FF`). Replace them with your preferred colors.

### My changes aren't showing up. What's wrong?

- Make sure you're editing the right file
- Save your changes (Ctrl+S or Cmd+S)
- Refresh your browser (Ctrl+F5 or Cmd+R)
- Clear your browser cache if needed

### Can I add more sections?

Yes! Copy an existing section and modify it. Follow the HTML structure.

### How do I add a custom domain?

After deploying to GitHub Pages, Netlify, etc., you can configure a custom domain in their settings.

### The template looks broken. Help!

- Make sure both HTML and CSS files are in the same folder
- Don't rename the CSS file unless you update the link in HTML
- Check that you didn't accidentally delete closing tags

### Can I mix elements from different templates?

Yes, but it requires some HTML/CSS knowledge. Start with one template and gradually incorporate elements.

### How do I update my page later?

Edit the HTML file again and re-upload to your hosting service. Most platforms have simple update processes.

## Contributing

Found a bug? Have a suggestion? Want to add a new template?

We welcome contributions! Please:
1. Fork this repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

All templates are released under the MIT License. Free to use for personal and commercial projects.

## Support

### Need Help?

1. Check the template's individual README file
2. Look at the HTML comments in the code
3. Open an issue on GitHub
4. Search for HTML/CSS basics online

### Useful Resources

- [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [GitHub Pages Guide](https://pages.github.com)
- [Web Accessibility](https://www.w3.org/WAI/fundamentals/)

## Acknowledgments

Created for academics, professionals, and everyone who needs a simple web presence without the complexity of modern web development.

## Roadmap

Future additions we're considering:
- More template variations
- Dark mode versions
- Multi-language templates
- Portfolio-focused templates
- Blog integration templates

---

**Made for the community**

If you find this useful, please star the repository and share it with others!
