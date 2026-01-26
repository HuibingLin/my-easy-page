# Getting Started with My Easy Page

**Quick guide to get your personal homepage up and running in 5 minutes!**

## Step 1: View All Templates

Open `index.html` in your web browser to see the gallery with live previews of all templates.

## Step 2: Choose Your Template

Browse through the three categories:

### Academic
- **Minimal CV** - For professors and researchers
- **Research Focus** - Highlight your research areas  
- **Lab Member** - Perfect for PhD students

### Professional
- **Developer** - For software engineers
- **Designer** - For UI/UX designers
- **Product Manager** - For PMs

### Simple
- **One Page** - Link-in-bio style
- **Card Style** - Digital business card

## Step 3: Download Your Template

1. Click the "Download" button on your chosen template
2. This opens the template folder
3. Download these files:
   - `index.html`
   - `style.css`
   - `README.md` (optional, but helpful!)

## Step 4: Edit Your Content

### Using a Text Editor

**Windows:**
- Right-click `index.html` → Open with → Notepad
- Or use Notepad++, VS Code

**Mac:**
- Right-click `index.html` → Open With → TextEdit
- Or use VS Code, Sublime Text

**Linux:**
- Use gedit, vim, or VS Code

### What to Edit

Look for these placeholder texts and replace them:

```html
<!-- Replace these -->
<h1>Your Name</h1>
<p class="title">Your Title</p>
<a href="mailto:your.email@example.com">Email</a>
```

**Tip:** Each template has comments (marked with `<!-- -->`) explaining what to edit.

## Step 5: Add Your Photo

1. Save your photo in the same folder as the HTML file
2. Name it something simple: `photo.jpg`
3. Find this line in the HTML:
   ```html
   <img src="https://via.placeholder.com/..." alt="Your Name">
   ```
4. Replace it with:
   ```html
   <img src="photo.jpg" alt="Your Name">
   ```

## Step 6: Test Locally

1. Save your changes (Ctrl+S or Cmd+S)
2. Open `index.html` in your web browser
3. Check that everything looks correct
4. Make more edits if needed

## Step 7: Publish Online

### Option A: GitHub Pages (Free & Easy)

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `yourusername.github.io`
3. Upload your `index.html` and `style.css` files
4. Your site is live at `https://yourusername.github.io`

### Option B: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag your folder onto the page
3. Get instant free hosting

### Option C: University/Company Server

Upload files to your institution's web server (check with IT department).

## Quick Customization

### Change Colors

Open `style.css` and find:

```css
:root {
    --primary-color: #0066FF;  /* Change this! */
}
```

Popular colors:
- Blue: `#0066FF`
- Purple: `#8B5CF6`  
- Green: `#10B981`
- Orange: `#F59E0B`

### Add More Content

To add a new publication, project, or section:
1. Find a similar existing item
2. Copy the entire block
3. Paste it below
4. Edit the content

Example - Adding a publication:
```html
<!-- Copy this entire block -->
<div class="publication">
    <h3>Your Paper Title</h3>
    <p class="authors"><strong>Your Name</strong>, Co-authors</p>
    <p class="venue">Conference Name, Year</p>
</div>
```

## Common Issues

### My changes don't show up
- Make sure you saved the file (Ctrl+S)
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)

### The page looks broken
- Check that both `index.html` and `style.css` are in the same folder
- Make sure you didn't accidentally delete any HTML tags

### Images don't show
- Check the image filename matches exactly (case-sensitive!)
- Make sure the image is in the same folder as the HTML

### Links don't work
- Make sure URLs start with `https://`
- Check for typos in email addresses

## Need More Help?

1. **Check the template's README** - Each template has detailed instructions
2. **Look at HTML comments** - The code has helpful notes
3. **Read the main README** - Comprehensive guide in the project root
4. **Search online** - "How to edit HTML" has tons of tutorials

## Pro Tips

1. **Start simple** - Just change text first, then try customization
2. **Save often** - Save your work frequently
3. **Keep a backup** - Make a copy before major changes
4. **Test on mobile** - Check how it looks on your phone
5. **Update regularly** - Keep your information current

## Checklist

Before publishing, make sure you've:

- [ ] Replaced all placeholder text with your information
- [ ] Updated your photo
- [ ] Changed all email addresses and links
- [ ] Tested all links to make sure they work
- [ ] Customized colors (optional)
- [ ] Tested on different screen sizes
- [ ] Checked spelling and grammar
- [ ] Removed any sections you don't need

## You're Done!

Congratulations! You now have a professional personal homepage.

Share your new page:
- Add it to your email signature
- Link it from your social media profiles
- Include it on your business cards
- Share it with colleagues and friends

---

**Questions?** Check the main README.md or the template-specific README files for more detailed information.

**Good luck!** 🚀

