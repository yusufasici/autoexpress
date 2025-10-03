# AutoKey Express - WordPress Template Files

This folder contains HTML/CSS templates converted from the React components that you can use to recreate the AutoKey Express website in WordPress.

## Files Included

- `header.html` - Complete header with navigation and mobile menu
- `hero.html` - Hero section with call-to-action and feature cards
- `services.html` - Services grid with cards and descriptions
- `about.html` - About section with features and statistics
- `contact.html` - Contact information and quote request form
- `footer.html` - Complete footer with company info and links
- `styles.css` - All CSS styles using the design system
- `javascript.js` - JavaScript for interactivity and WordPress integration

## WordPress Integration Methods

### Method 1: Custom Theme Development
1. Create a new WordPress theme or child theme
2. Copy the CSS to your theme's `style.css`
3. Use the HTML templates in your theme files (`header.php`, `footer.php`, `index.php`, etc.)
4. Add the JavaScript to your theme's `functions.php` or separate JS file

### Method 2: Page Builder Integration
**For Elementor:**
1. Create custom widgets using the HTML templates
2. Add the CSS to WordPress Customizer > Additional CSS
3. Use Elementor's HTML widget to insert the template code

**For Gutenberg/Block Editor:**
1. Create custom blocks using the HTML templates
2. Add CSS to your theme or Additional CSS
3. Use Custom HTML blocks for quick implementation

**For Other Page Builders (Divi, Beaver Builder, etc.):**
1. Use HTML modules/widgets to insert the template code
2. Add the CSS to your theme's styles

### Method 3: Plugin-Based Approach
1. Install a plugin like "Insert Headers and Footers"
2. Add the CSS to the header section
3. Use the HTML templates in pages/posts using HTML blocks

## CSS Variables Integration

The styles use CSS custom properties (variables) for easy theme customization. You can modify the colors in the `:root` section of `styles.css`:

```css
:root {
  --primary: 178 77% 42%;        /* Change main brand color */
  --background: 220 13% 18%;     /* Change background color */
  /* ... other variables */
}
```

## Image Requirements

Make sure to add these images to your WordPress media library:
- `logo.png` - Company logo
- `hero-locksmith.jpg` - Hero background image
- `lockout-service.jpg` - Lockout service image
- `key-replacement.jpg` - Key replacement service image

## Form Integration

The contact form in `contact.html` needs backend processing. You can:

1. **Use Contact Form 7**: Replace the form HTML with a Contact Form 7 shortcode
2. **Use Gravity Forms**: Create a form in Gravity Forms and replace the HTML
3. **Custom PHP Processing**: Add form processing to your theme's `functions.php`

## Mobile Responsiveness

The templates are fully responsive and include:
- Mobile-first CSS approach
- Collapsible mobile navigation
- Responsive grid layouts
- Touch-friendly button sizes

## SEO Optimization

The templates include SEO best practices:
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images
- Clean, descriptive URLs
- Fast-loading optimized code

## Browser Support

The templates support:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Customization Tips

1. **Colors**: Modify the CSS custom properties in `:root`
2. **Fonts**: Add Google Fonts and update the font-family in the CSS
3. **Layout**: Adjust grid columns and spacing using CSS Grid properties
4. **Content**: Replace placeholder text with your actual content
5. **Images**: Optimize images for web and use appropriate alt text

## Performance Optimization

- Minify CSS and JavaScript for production
- Optimize images (WebP format recommended)
- Use a caching plugin
- Enable GZIP compression
- Consider a CDN for assets

## Accessibility Features

The templates include:
- Proper ARIA labels
- Keyboard navigation support
- High contrast colors
- Screen reader friendly structure
- Focus indicators

## Next Steps

1. Choose your preferred WordPress integration method
2. Set up the basic structure using the HTML templates
3. Add the CSS styles to your theme
4. Customize colors and content to match your brand
5. Test on different devices and browsers
6. Optimize for performance and SEO