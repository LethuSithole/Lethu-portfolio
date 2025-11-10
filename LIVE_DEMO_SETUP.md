# 🎬 Live Demo Feature Setup Guide

## Overview

Your portfolio now has an interactive **Live Demo Modal** that displays your projects in a beautiful, fullscreen-capable interface!

## 📋 What's Been Added

### 1. **Interactive Demo Buttons**

- Each project has a "Live Demo" button with play icon
- GitHub repository links with GitHub icon
- Beautiful hover effects and animations

### 2. **Demo Modal Features**

- ✨ Fullscreen modal with iframe support
- 🎨 Gradient header with close button
- 📺 Fullscreen toggle functionality
- ⌨️ Keyboard support (ESC to close)
- 📱 Fully responsive design
- 🔄 Smooth animations

### 3. **GitHub Integration**

All your projects now have GitHub URLs configured:

#### Live Demo URLs (GitHub Pages):

- **Portfolio**: `https://lethusithole.github.io/Lethu-portfolio/`
- **Tic Tac Toe**: `https://lethusithole.github.io/tic-tac-toe/`
- **Airbnb Clone**: `https://lethusithole.github.io/airbnb-clone/`
- **Calculator**: `https://lethusithole.github.io/calculator/`
- **YouTube Clone**: `https://lethusithole.github.io/youtube-clone/`
- **Netflix Clone**: `https://lethusithole.github.io/netflix-clone/`
- **Google Keep**: `https://lethusithole.github.io/google-keep-react/`
- **Tesla Clone**: `https://lethusithole.github.io/tesla-clone/`

#### GitHub Repository URLs:

- **Portfolio**: `https://github.com/LethuSithole/Lethu-portfolio`
- **Tic Tac Toe**: `https://github.com/LethuSithole/tic-tac-toe`
- **Airbnb Clone**: `https://github.com/LethuSithole/airbnb-clone`
- **Calculator**: `https://github.com/LethuSithole/calculator`
- **YouTube Clone**: `https://github.com/LethuSithole/youtube-clone`
- **Netflix Clone**: `https://github.com/LethuSithole/netflix-clone`
- **Google Keep**: `https://github.com/LethuSithole/google-keep-react`
- **Tesla Clone**: `https://github.com/LethuSithole/tesla-clone`

## 🚀 How to Deploy Your Projects to GitHub Pages

For each project that doesn't have a live URL yet, follow these steps:

### Step 1: Push Your Project to GitHub

```bash
cd your-project-folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/LethuSithole/project-name.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select `main` branch
5. Click **Save**
6. Wait 2-3 minutes for deployment
7. Your site will be live at: `https://lethusithole.github.io/project-name/`

### Step 3: Update the URLs (if different)

If your actual repository names or URLs are different, update them in `script.js`:

```javascript
const projectDemos = {
  projectname: {
    title: "Your Project Title",
    url: "https://your-actual-url.com", // Update this
    type: "iframe",
  },
  // ... other projects
};
```

Also update the GitHub links in `projects.html`:

```html
<a
  href="https://github.com/YourUsername/actual-repo-name"
  class="btn-repo"
  target="_blank"
>
  <i class="fab fa-github"></i> GitHub
</a>
```

## 🎨 Customizing the Demo Modal

### Change Modal Colors

In `styles.css`, find `.demo-modal-header`:

```css
.demo-modal-header {
  background: linear-gradient(
    135deg,
    #667eea,
    #764ba2
  ); /* Change colors here */
}
```

### Adjust Modal Size

```css
.demo-modal-content {
  max-width: 1400px; /* Change width */
  max-height: 95vh; /* Change height */
}
```

### Modify Animation Speed

```css
@keyframes slideUp {
  /* Adjust timing in animation property */
}
.demo-modal-content {
  animation: slideUp 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Change 0.4s */
}
```

## 📱 How It Works

### When User Clicks "Live Demo":

1. Modal opens with smooth animation
2. Project loads in an iframe
3. User can interact with the live project
4. Fullscreen mode available
5. Close with X button or ESC key

### Features for Projects Without URLs:

- Shows placeholder with project features
- Input field to add URL manually
- Feature cards showcase project capabilities
- Smooth fallback experience

## 🛠️ Troubleshooting

### Demo Not Loading?

- Check if GitHub Pages is enabled
- Verify the URL is correct in `script.js`
- Some sites don't allow iframe embedding (use placeholder)

### Iframe Issues?

If a site blocks iframe embedding, change `type` to `"placeholder"`:

```javascript
projectname: {
  title: "Project Title",
  url: "https://project-url.com",
  type: "placeholder", // Changed from "iframe"
  features: [
    // Add feature descriptions
  ]
}
```

### Mobile Issues?

The modal is fully responsive, but test on actual devices for best results.

## 🎯 Best Practices

1. **Test All Links**: Click each demo and GitHub button
2. **Update URLs**: Replace placeholder URLs with actual project URLs
3. **Add Screenshots**: Include project images in the placeholder view
4. **Optimize Loading**: Use lazy loading for better performance
5. **Error Handling**: Test with and without internet connection

## 📊 Key Files Modified

- `projects.html` - Added modal HTML and updated buttons
- `styles.css` - Added 400+ lines of modal styles
- `script.js` - Added demo functionality (200+ lines)

## 🎉 Features Summary

✅ Beautiful modal design with glassmorphism
✅ Fullscreen capability
✅ Responsive on all devices
✅ Smooth animations
✅ Keyboard shortcuts
✅ GitHub integration
✅ Fallback for unavailable projects
✅ Icon support with Font Awesome
✅ Professional UI/UX

## 🔄 Future Enhancements

Consider adding:

- Video previews instead of iframes
- Project statistics (stars, forks)
- Technology badges in modal
- Share buttons
- Download project button
- Project analytics

---

**Need Help?**
Check the console for any JavaScript errors, and verify all URLs are correct!

Happy Coding! 🚀
