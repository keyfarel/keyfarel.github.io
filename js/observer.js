// ===== observer.js =====
export function initObserverAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after animation plays once
      }
    });
  }, observerOptions);

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section-title').forEach(title => {
      title.classList.add('fade-in');
      observer.observe(title);
    });

    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    if (aboutText && aboutImage) {
      aboutText.classList.add('slide-in-left');
      aboutImage.classList.add('slide-in-right');
      observer.observe(aboutText);
      observer.observe(aboutImage);
    }

    document.querySelectorAll('.stat').forEach((stat, index) => {
      stat.classList.add('fade-in');
      stat.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(stat);
    });

    document.querySelectorAll('.skill-category').forEach((category, index) => {
      category.classList.add('fade-in');
      category.style.transitionDelay = `${index * 0.2}s`;
      observer.observe(category);
    });

    document.querySelectorAll('.project-card').forEach((card, index) => {
      card.classList.add('fade-in');
      card.style.transitionDelay = `${index * 0.2}s`;
      observer.observe(card);
    });

    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    if (contactInfo && contactForm) {
      contactInfo.classList.add('slide-in-left');
      contactForm.classList.add('slide-in-right');
      observer.observe(contactInfo);
      observer.observe(contactForm);
    }
  });
}
