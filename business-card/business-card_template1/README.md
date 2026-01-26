# Digital Business Card Template 1

A modern, compact digital business card perfect for sharing your contact information and social links.

## Features

- **Clean Design**: Minimalist and professional layout
- **Contact Information**: Email, phone, and location display
- **Social Links**: Easy-to-access social media icons
- **QR Code**: Optional QR code for quick contact sharing
- **Responsive**: Works perfectly on all devices
- **Customizable**: Easy to modify colors, content, and styling

## Files Included

- `index.html` - Main HTML file
- `style.css` - Stylesheet with all styling
- `README.md` - This file

## How to Use

1. **Download the template** files to your computer
2. **Open `index.html`** in a text editor
3. **Customize the content**:
   - Replace "Your Name" with your actual name
   - Update your professional title
   - Add your contact information (email, phone, location)
   - Update social media links
   - Replace the placeholder avatar image with your photo
   - Update the QR code URL if needed
4. **Save the file** and open it in a web browser to preview
5. **Deploy** to your web hosting or GitHub Pages

## Customization Guide

### Changing Colors

Edit the gradient in `style.css`:

```css
/* Card header gradient */
.card-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Updating Avatar

Replace the placeholder image URL:

```html
<img src="https://via.placeholder.com/120" alt="Your Photo" class="avatar">
```

### Adding/Removing Social Links

Add or remove social link sections in `index.html`:

```html
<a href="YOUR_LINK" class="social-link" target="_blank" title="Platform Name">
    <!-- SVG icon here -->
</a>
```

### Modifying Contact Information

Update the contact items in `index.html`:

```html
<div class="contact-item">
    <span class="contact-icon">📧</span>
    <span class="contact-text">your.email@example.com</span>
</div>
```

### QR Code

Update the QR code URL to point to your website or vCard:

```html
<img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=YOUR_URL" alt="QR Code">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is open source and available for personal and commercial use.

## Support

For questions or issues, please refer to the main project documentation.

