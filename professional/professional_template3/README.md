# Product Manager - Professional Homepage Template

A professional template designed specifically for product managers to showcase their experience, products, and achievements.

## Preview

Features a data-driven hero section with stats, timeline layout for experience, and product cards highlighting impact and metrics.

## Features

- Hero section with impressive stats
- Timeline layout for work experience
- Product showcase cards with impact metrics
- Tools and methodologies section
- Focus on metrics and achievements
- Fully responsive design
- Professional, business-focused aesthetic

## Perfect For

- Product Managers
- Senior Product Managers
- Product Owners
- Product Leaders
- Technical Product Managers
- Growth Product Managers

## How to Use

### 1. Download Files

Download both `index.html` and `style.css` to your computer.

### 2. Edit Your Information

Update these sections in `index.html`:

- **Header**: Your name in logo and navigation
- **Hero section**: Your title, description, and stats
- **About**: Your bio and core competencies
- **Experience**: Your work history with achievements
- **Products**: Products you've launched with impact
- **Tools**: Software and methodologies you use
- **Contact**: Your email and social links

### 3. Update Your Stats

In the hero section, replace with your metrics:

```html
<div class="stat">
    <div class="stat-number">15+</div>
    <div class="stat-label">Products Launched</div>
</div>
```

### 4. Customize Colors

Open `style.css` and change the primary color:

```css
:root {
    --primary-color: #059669;  /* Green theme */
}
```

Popular PM color schemes:
- Blue (trust): `#0066FF`
- Purple (innovation): `#8B5CF6`
- Orange (energy): `#F59E0B`
- Teal (growth): `#14B8A6`

### 5. Adding Experience

Copy this block for each position:

```html
<div class="timeline-item">
    <div class="timeline-date">Year - Year</div>
    <div class="timeline-content">
        <h3>Job Title</h3>
        <p class="company">Company • Location</p>
        <ul class="achievements">
            <li>Achievement with metric</li>
            <li>Another achievement</li>
        </ul>
    </div>
</div>
```

### 6. Adding Products

Copy this block for each product:

```html
<div class="product-card">
    <div class="product-header">
        <h3>Product Name</h3>
        <span class="product-tag">Category</span>
    </div>
    <p class="product-desc">Description...</p>
    <div class="product-impact">
        <div class="impact-item">
            <strong>Impact:</strong> Metrics and results
        </div>
        <div class="impact-item">
            <strong>Role:</strong> Your responsibilities
        </div>
    </div>
</div>
```

## Best Practices for Product Managers

### Writing Achievement Bullets

Follow this formula:
```
[Action Verb] + [What You Did] + [Quantifiable Result]
```

Examples:
- ✅ "Launched mobile app that grew to 500K users in 12 months"
- ✅ "Increased user engagement by 40% through data-driven features"
- ❌ "Worked on mobile app" (too vague)
- ❌ "Responsible for user engagement" (no result)

### Showcasing Products

For each product, include:
1. **Product name** - Clear and descriptive
2. **Category** - B2B SaaS, Mobile, Enterprise, etc.
3. **Description** - What it does (2-3 sentences)
4. **Impact** - Metrics that matter (revenue, users, growth)
5. **Your role** - What you specifically did

### Choosing Metrics

Good metrics to highlight:
- Revenue (ARR, MRR)
- User growth
- Retention rate
- Customer satisfaction (NPS, CSAT)
- Feature adoption
- Performance improvements
- Market share

### Stats in Hero Section

Choose 3 impressive stats:
- Years of experience
- Number of products launched
- Total users impacted
- Revenue generated
- Team size led
- Markets entered

## Customization Tips

### Reordering Sections

You can rearrange sections by moving the `<section>` blocks in the HTML. Common orders:
1. Hero → About → Products → Experience
2. Hero → Experience → Products → About
3. Hero → Products → Experience → Tools

### Adjusting Timeline

To change the date column width:

```css
.timeline-item {
    grid-template-columns: 150px 1fr;  /* Adjust first value */
}
```

### Changing Product Grid Columns

```css
.products-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    /* Or fixed: repeat(3, 1fr) for 3 columns */
}
```

## Adding Certifications

Add a new section after Tools:

```html
<section class="certifications-section">
    <div class="container">
        <h2 class="section-title">Certifications</h2>
        <ul class="skills-list">
            <li>Certified Scrum Product Owner (CSPO)</li>
            <li>Product Management Certification - General Assembly</li>
        </ul>
    </div>
</section>
```

## Resume Download

To add a resume download button in the contact section, include a PDF link:

```html
<a href="resume.pdf" download class="contact-link">
    <span class="icon">📄</span>
    <span>Download Resume</span>
</a>
```

## Browser Compatibility

Tested on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## SEO Tips

1. Update the `<title>` tag with your name
2. Add a meta description
3. Use your actual name in headings
4. Include relevant keywords in your bio

## Content Writing Tips

- **Be specific**: Use numbers and metrics
- **Show impact**: Focus on results, not just tasks
- **Tell stories**: Briefly explain the context
- **Stay concise**: 2-3 sentences per section
- **Use action verbs**: Launched, increased, led, designed

---

**License**: Free to use for personal and professional purposes.

