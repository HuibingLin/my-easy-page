# Designer - Professional Homepage Template

A beautiful, visual-first template designed specifically for UI/UX designers and creative professionals.

## Preview

Clean and elegant layout with a focus on portfolio showcase. Features large project images, smooth hover effects, and a modern aesthetic.

## Features

- Portfolio grid with large project showcases
- Visual-first design approach
- About section with services and tools
- Contact cards for multiple platforms
- Fully responsive layout
- Smooth hover animations
- Clean, minimal aesthetic

## Perfect For

- UI/UX Designers
- Product Designers
- Graphic Designers
- Visual Designers
- Creative Professionals
- Freelance Designers

## How to Use

### 1. Download Files

Download both `index.html` and `style.css` to your computer.

### 2. Add Your Project Images

Replace the placeholder divs with your actual project images:

**Before:**
```html
<div class="placeholder-img" style="background: linear-gradient(...);">
    <span>Project Name</span>
</div>
```

**After:**
```html
<img src="your-project-image.jpg" alt="Project Name">
```

Upload your project images to the same folder and reference them.

### 3. Edit Your Information

Update these sections in `index.html`:

- **Header**: Your name in the logo
- **Hero section**: Your name, title, and description
- **Portfolio items**: Add your projects (4-8 recommended)
- **About section**: Your bio, services, and tools
- **Contact section**: Your email and social platform links

### 4. Customize Colors

Open `style.css` and change the accent color:

```css
:root {
    --accent-color: #6366F1;  /* Change to your brand color */
}
```

### 5. Adding Projects

Copy this block for each project:

```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="project-image.jpg" alt="Project Name">
    </div>
    <div class="portfolio-info">
        <h3>Project Name</h3>
        <p class="portfolio-role">Your Role • Year</p>
        <p>Project description...</p>
        <div class="portfolio-tags">
            <span>Tag 1</span>
            <span>Tag 2</span>
        </div>
    </div>
</div>
```

## Portfolio Image Guidelines

For best results:
- **Aspect ratio**: 16:9 or 4:3 works well
- **Resolution**: At least 1200px wide
- **Format**: JPG or PNG
- **File size**: Optimize for web (under 500KB each)

### Image Tips:
- Use mockups to showcase your designs
- Include context (devices, environments)
- Show key screens or features
- Maintain consistent style across images

## Customization Tips

### Change Portfolio Grid Layout

Modify the number of columns:

```css
.portfolio-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns */
    /* Or use: repeat(3, 1fr) for 3 columns */
}
```

### Adjust Section Spacing

```css
.work-section {
    padding: 100px 0;  /* Top/Bottom padding */
}
```

### Add More Services

In the services list:

```html
<li>Your Service</li>
```

### Add More Tools

In the tools list:

```html
<span>Tool Name</span>
```

## Portfolio Organization

Recommended structure:
1. **Most impressive project first**
2. Show 4-8 projects total
3. Variety of project types
4. Recent work (last 2-3 years)
5. Include case studies or links

## Contact Platform Cards

The template includes cards for:
- Email
- LinkedIn
- Dribbble
- Behance

You can add more by copying the `.contact-card` div.

## Adding Case Study Links

To link to detailed case studies:

```html
<div class="portfolio-info">
    <h3><a href="case-study.html">Project Name</a></h3>
    ...
</div>
```

Then style the links in CSS.

## Browser Compatibility

Works perfectly on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Responsive Design

- **Desktop**: 2-column portfolio grid
- **Tablet**: Single column layout
- **Mobile**: Stacked, optimized for touch

## Performance Tips

- Optimize images before uploading
- Use WebP format for better compression
- Lazy load images for faster initial load
- Keep total page size under 3MB

## Design Philosophy

This template emphasizes:
- **Visual hierarchy**: Large images, clear typography
- **Whitespace**: Breathing room for content
- **Simplicity**: Let your work speak for itself
- **Professionalism**: Clean, modern aesthetic

---

**License**: Free to use for personal and professional portfolios.

