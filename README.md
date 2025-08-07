# ✨ Personal Portfolio Website ✨

A clean, modern, and responsive personal portfolio website designed to showcase my skills, projects, and professional profile. Built from scratch with a focus on lightweight performance, modern UI/UX, and clean code architecture.

---

## 🎬 Live Demo

Live demo: [https://keyfarel.github.io/](https://keyfarel.github.io/)

---

## 🌟 Features

-   **Fully Responsive Design**: Adapts seamlessly to all screen sizes, from mobile phones to desktop monitors. 📱💻
-   **Dynamic Content Rendering**: Project and skill sections are rendered dynamically from JavaScript data objects, making content updates easy and centralized. 🔄
-   **Interactive Skill Details**: Click on a skill to view a detailed description, presented in a full-screen modal on mobile and a clean pop-up on desktop. ✨
-   **Smooth Animations**: Subtle scroll-triggered animations and smooth transitions to enhance user experience. 💫
-   **Optional Project Links**: The project section conditionally displays a "Live Demo" link only if the URL is provided in the data. 🔗
-   **Modern UI/UX**: Features a clean design, a full-screen modal for mobile with a blurred background overlay for a modern look and feel. 🎨

---

## 🛠️ Technologies Used

This project was built using core web technologies without relying on heavy external frameworks for the main functionality.

-   **HTML5**: Semantic and accessible markup. 📄
-   **CSS3**: Modern styling with Custom Properties (Variables), Flexbox, and Grid for responsive layouts. 💅
-   **JavaScript (ES6+)**: Interactive logic, DOM manipulation, and dynamic content rendering. 🚀

---

## 🏗️ Project Architecture

This portfolio follows a modular, separation-of-concerns architecture to keep the codebase organized and maintainable.

```text
.
├── assets/                     # Folder for assets (images, fonts, etc.)
│   ├── favicon/                # Folder for Favicon
│   │    └── favicon.ico        # Favicon image
│   │
│   └── placeholder/            # Folder for placeholder images
│       └── placeholder.svg     # Placeholder image
│
├── css/
│   ├── components/             # Main folder for all CSS components that build the page.
│   │   ├── buttons.css         # CSS file for button components
│   │   ├── cards.css           # CSS file for card components      
│   │   ├── forms.css           # CSS file for form components
│   │   ├── navigation.css      # CSS file for navigation components
│   │   ├── section-title.css   # CSS file for section title components
│   │   ├── skill-details.css   # CSS file for skill detail components
│   │   ├── social-links.css    # CSS file for social media icon components
│   │   └── spinner.css         # CSS file for spinner components
│   │
│   ├── pages/                  # Main folder for all page-specific CSS that builds the page.
│   │   ├── about.css           # CSS file for the 'About' page
│   │   ├── contact.css         # CSS file for the 'Contact' page
│   │   ├── hero.css            # CSS file for the 'Hero' page
│   │   ├── projects.css        # CSS file for the 'Projects' page
│   │   └── skills.css          # CSS file for the 'Skills' page
│   │   
│   ├── base.css                # CSS reset and normalization file
│   ├── components.css          # Entry CSS component file
│   ├── utilities.css           # CSS utility classes file
│   ├── layout.css              # Page layout CSS file 
│   ├── main.css                # Main CSS file
│   └── utilities.css           # CSS utility classes file
│
├── js/
│   ├── modules/                # Main folder for all JavaScript modules that build the page.
│   │   ├── about/              # Module for the 'About' component. All 'About'-related JS is here.
│   │   │   ├── data.js         # Contains raw data (text, lists) specific to the 'About' component.
│   │   │   └── render.js       # Function to fetch data & create HTML for the 'About' component.
│   │   │
│   │   ├── contact/            # (Same structure for the 'Contact' component)
│   │   │   ├── data.js         # Contains raw data (text, lists) specific to the 'Contact' component.
│   │   │   └── render.js       # Function to fetch data & create HTML for the 'Contact' component.
│   │   │
│   │   ├── footer/             # (Same structure for the 'Footer' component)
│   │   │   ├── data.js         # Contains raw data (text, lists) specific to the 'Footer' component.
│   │   │   └── render.js       # Function to fetch data & create HTML for the 'Footer' component.
│   │   │
│   │   ├── hero/               # (Same structure for the 'Hero' component)
│   │   │   ├── data.js         # Contains raw data (text, lists) specific to the 'Hero' component.
│   │   │   └── render.js       # Function to fetch data & create HTML for the 'Hero' component.
│   │   │
│   │   ├── navbar/             # (Same structure for the 'Navbar' component)
│   │   │   ├── data.js         # Contains raw data (text, lists) specific to the 'Navbar' component.
│   │   │   └── render.js       # Function to fetch data & create HTML for the 'Navbar' component.
│   │   │
│   │   ├── project/            # (Same structure for the 'Project' component)
│   │   │   ├── data.js         # Contains raw data (text, lists) specific to the 'Project' component.
│   │   │   └── render.js       # Function to fetch data & create HTML for the 'Project' component.
│   │   │
│   │   ├── skill/              # (Same structure for the 'Skill' component)
│   │   │   ├── data.js         # Contains raw data (text, lists) specific to the 'Skill' component.
│   │   │   └── render.js       # Function to fetch data & create HTML for the 'Skill' component.
│   │   │
│   │   └── render.js           # MAIN render file: imports & runs all render.js from each component.
│   │
│   ├── config.js               # Configuration file
│   ├── counter.js              # Logic for number counter animation
│   ├── form.js                 # Logic for contact form validation and submission
│   ├── include.js              # Logic for HTML file includes
│   ├── main.js                 # Main JS entry file, initializes all modules
│   ├── navbar.js               # Navigation functionality (toggle, scroll effect)
│   ├── observer.js             # Animation when elements enter viewport
│   ├── parallax.js             # Parallax effect on elements
│   ├── scroll.js               # Logic for smooth scrolling
│   ├── skills.js               # Animation for skill bars
│   └── typing.js               # Typing effect
│
├── .gitignore                  # Git ignore file
├── google433223cda0a77477.html # Google verification HTML file
├── index.html                  # Main HTML file
├── robots.txt                  # Site index file for Google
├── sitemap.xml                 # Sitemap file for Google search
```

---

## 📧 Contact

Feel free to reach out if you have any questions or just want to connect!

-   **Email**: [keyfarel645@gmail.com](mailto:keyfarel645@gmail.com) <!-- Replace with your email -->
-   **LinkedIn**: [Key Firdausi Alfarel](https://www.linkedin.com/in/key-firdausi-alfarel-566616290) <!-- Replace with your LinkedIn -->

---

## 📄 Note

This project is for demonstration purposes only.