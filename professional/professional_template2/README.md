# Developer - Professional Homepage Template

A modern, tech-focused template designed specifically for software developers and engineers.

## Preview

Features a sleek dark navigation, eye-catching hero section with gradient background, skills showcase, and project portfolio cards.

## Features

- Modern gradient hero section
- Sticky navigation bar
- Project portfolio with cards
- Skills organized by category
- Fully responsive design
- Clean, professional layout
- Social media icons (GitHub, LinkedIn, Twitter)

## Perfect For

- Full Stack Developers
- Frontend/Backend Engineers
- Software Engineers
- Web Developers
- Freelance Developers

## How to Use

### 1. Download Files

Download both `index.html` and `style.css` to your computer.

### 2. Edit Your Information

Update these sections in `index.html`:

- **Navigation logo**: Change "AR" to your initials
- **Hero section**: Your name, title, and tagline
- **Social links**: Add your GitHub, LinkedIn, Twitter URLs
- **About**: Write your bio (3 paragraphs recommended)
- **Skills**: Add/remove skills in each category
- **Projects**: Showcase your best work (3-6 projects)
- **Contact**: Your email and location

### 3. Customize Colors

Open `style.css` and change the primary color:

```css
:root {
    --primary-color: #0066FF;  /* Change to your brand color */
}
```

Popular alternatives:
- Green: `#10B981`
- Purple: `#8B5CF6`
- Orange: `#F59E0B`
- Teal: `#14B8A6`

### 4. Adding Projects

Copy this block for each project:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <div class="project-links">
            <a href="#">Demo</a>
            <a href="#">Code</a>
        </div>
    </div>
    <p class="project-desc">
        Description of your project...
    </p>
    <div class="project-tech">
        <span>Tech1</span>
        <span>Tech2</span>
        <span>Tech3</span>
    </div>
</div>
```

### 5. Adding Skills

Add skills in the appropriate category:

```html
<span class="skill-tag">Your Skill</span>
```

You can create new skill categories by copying the `.skill-category` div.

## Customization Tips

### Change Hero Background

Modify the gradient in the CSS:

```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adjust Section Spacing

Change padding values:

```css
.section {
    padding: 80px 20px;  /* Vertical | Horizontal */
}
```

### Add More Skill Categories

Copy an existing skill-category block and add it to the skills-grid.

## Social Icons

The template includes SVG icons for:
- GitHub
- LinkedIn
- Twitter

To add more social platforms, you can:
1. Find SVG icons at sites like [heroicons.com](https://heroicons.com)
2. Add them following the same pattern in the HTML

## Project Showcase Tips

- Highlight your 3-6 best projects
- Use descriptive titles
- Keep descriptions concise (2-3 sentences)
- Link to live demos and GitHub repos
- List main technologies used

## Browser Compatibility

Tested and working on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Responsive Breakpoints

- **Desktop**: Full layout with grid
- **Tablet** (≤768px): Adjusted spacing
- **Mobile** (≤480px): Single column, stacked elements

## Performance

- No external dependencies
- Pure HTML/CSS (no JavaScript)
- Fast loading time
- Lightweight (~5KB compressed)

---

**License**: Free to use for personal and professional purposes.

