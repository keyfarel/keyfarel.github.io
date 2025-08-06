// ===== navbar.js =====
export function initNavbarToggle() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

export function initNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');
  // Always add the 'scrolled' class to make the navbar visible from the start
  navbar.classList.add('scrolled');
}

export function initActiveLinkHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let isClickScrolling = false;
  let scrollTimeout;

  // Function to handle link activation on click
  function handleLinkClick(clickedLink) {
    isClickScrolling = true;
    navLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');

    // Reset the flag after the scroll animation likely finishes
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isClickScrolling = false;
    }, 1000); // 1 second delay
  }

  // Add click listeners to all nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => handleLinkClick(link));
  });

  const observerOptions = {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(entries => {
    if (isClickScrolling) return; // Ignore observer if a click-scroll is in progress

    // Handle the case when at the very top of the page (Home section)
    if (window.scrollY < 50) { // Use a small threshold instead of === 0
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#hero') {
          link.classList.add('active');
        }
      });
      return; // Exit early as Home is handled
    }

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}