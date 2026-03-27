#  Professional Portfolio Template

A modern, responsive portfolio template for developers, designers, and creatives. Features **Light/Dark mode**, smooth animations, and easy customization.

![Portfolio Preview](./images/preview.png)

---

##  Features

- 🌓 **Light & Dark Mode** - Toggle between themes with one click
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast & Lightweight** - No frameworks, pure HTML/CSS/JS
- 🎯 **SEO Optimized** - Built with best practices
- ♿ **Accessible** - WCAG compliant
- 🎨 **Easy to Customize** - Change colors in one place
- 📬 **Contact Ready** - Email and social links included
- 🖼️ **Project Modal** - Beautiful popup for project details

---

## 🚀 Quick Start

### 1. Download & Extract
Download the template and extract all files to a folder.

### 2. Open in Code Editor
Open the folder in VS Code or your preferred editor.

### 3. Edit Your Information

#### A. Update Personal Info (`index.html`)
Search and replace these placeholders:
- `Your Name` → Your actual name
- `Your Title Here` → Your job title (e.g., "Frontend Developer")
- `your.email@example.com` → Your email
- `yourusername` → Your social media usernames

#### B. Update Colors (`style.css`)
Open `style.css` and edit the CSS variables at the top:

```css
:root {
    --primary: #38bdf8;      /* Main accent color */
    --accent: #10b981;       /* Secondary color */
    --gradient: linear-gradient(...); /* Button gradient */
}

C. Update Projects (index.html)
Find the project-card sections and update:
data-title → Project name
data-desc → Project description
data-metric1 & data-metric2 → Key achievements
data-tools → Technologies used
data-github → GitHub repository link
data-live → Live demo link
Background image URL → Your project screenshot
D. Update Skills (index.html)
Edit the skill-category sections with your actual skills.
4. Add Your Images
Replace the placeholder images in the images/ folder or update the URLs in index.html.
5. Test Locally
Open index.html in your browser to preview.
6. Deploy
Upload to Netlify, Vercel, or GitHub Pages (free hosting).
📁 File Structure
123456789
portfolio-template/│├── index.html          # Main HTML file (edit this)├── style.css           # All styles (edit colors here)├── script.js           # JavaScript functionality├── README.md           # This file└── images/             # Add your images here    ├── preview.png    └── project-1.png
🎨 Customization Guide
Change Theme Colors
In style.css, modify the CSS variables:
css
123456
:root {    --bg-body:  #0f172a;      /* Background color */    --text-main:  #f8fafc;    /* Main text color */    --primary:  #38bdf8;      /* Primary accent */    --accent:  #10b981;       /* Secondary accent */}
Change Fonts
In index.html <head>, update the Google Fonts link:
html
1
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
Add More Projects
Copy and paste a project-card article block in index.html and update the data attributes.
🌐 Deployment
Netlify (Recommended)
Drag and drop your folder to Netlify Drop
Your site will be live in seconds!
Vercel
Install Vercel CLI: npm i -g vercel
Run vercel in your project folder
Follow the prompts
GitHub Pages
Create a GitHub repository
Push your files
Go to Settings → Pages → Select main branch
Your site will be live at yourusername.github.io/repo-name
📱 Browser Support
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
📄 License
This template is for personal and commercial use. You can modify it as needed for your projects.
Please do not resell this template as-is.
💬 Support
Found a bug or need help? Open an issue on GitHub or contact me at your.email@example.com.
🙏 Credits
Icons: Font Awesome
Fonts: Google Fonts
Images: Unsplash
Made with ❤️ by [Your Name]
Portfolio | GitHub | LinkedIn
