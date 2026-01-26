# Simple Academic Homepage Template 1

A minimalist academic-style personal homepage with clean, professional design.

## Preview

A clean, text-focused layout with header section (name and photo), followed by organized sections for About Me, Research Interests, Education, Publications, Academic Service, and Work Experience.

## Features

- Minimalist academic design
- Clean typography and spacing
- Header with name, photo, and contact info
- Organized content sections
- Publication list with links
- Fully responsive
- Easy to customize

## Perfect For

- Academic researchers
- Graduate students
- Professors
- PhD candidates
- Academic professionals
- Personal academic websites

## How to Use

### 1. Download Files

Download `index.html` and `style.css` to your computer.

### 2. Add Your Photo

Replace the placeholder image:

```html
<img src="your-photo.jpg" alt="Your Photo" class="profile-photo">
```

### 3. Edit Your Information

Update in `index.html`:

- **Name**: Replace "Your Name"
- **Contact Info**: Department, university, location, email
- **Social Links**: GitHub, Google Scholar, LinkedIn
- **About Me**: Brief introduction
- **Research Interests**: List your research areas
- **Education**: Your educational background
- **Publications**: Your papers and publications
- **Academic Service**: Reviewing activities
- **Work Experience**: Previous positions

### 4. Customize Styling

Open `style.css` to adjust:

- Font sizes
- Colors
- Spacing
- Section borders

### 5. Update Publications

Add your publications in this format:

```html
<li class="publication-item">
    <strong>[1]</strong> Paper Title, Conference/Journal Name Year, by Author1, Author2.
    <div class="publication-links">
        <a href="#" target="_blank">full paper</a> | 
        <a href="#" target="_blank">code</a>
</div>
</li>
```

## Customization Tips

### Change Font Sizes

```css
.name {
    font-size: 2.2rem;  /* Adjust header name size */
}

.section-title {
    font-size: 1.4rem;  /* Adjust section titles */
}
```

### Modify Colors

```css
.section-title {
    border-bottom: 2px solid #e0e0e0;  /* Change border color */
}

.contact-info a {
    color: #0066cc;  /* Change link color */
}
```

### Adjust Spacing

```css
.section {
    margin-bottom: 35px;  /* Space between sections */
}
```

## Browser Compatibility

Works perfectly on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Performance

- Lightweight: ~5KB total (HTML + CSS)
- Minimal JavaScript (only for date)
- Fast loading
- Mobile optimized

## Accessibility

- Semantic HTML structure
- Alt text for images
- Clear link labels
- Good color contrast
- Readable typography

## Tips for Best Results

1. **Professional photo**: Use a clear headshot
2. **Keep it updated**: Regularly update publications and info
3. **Clear sections**: Organize content logically
4. **Test links**: Verify all links work
5. **Mobile friendly**: Most visitors use mobile devices

---

**License**: Free to use for personal and professional purposes.
