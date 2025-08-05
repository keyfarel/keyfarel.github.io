export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger a little before it's fully in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add('visible');

        // Handle staggered children if the container asks for it
        if (element.classList.contains('reveal-stagger')) {
          const children = element.querySelectorAll('.reveal');
          children.forEach((child, index) => {
            // We can't set a CSS variable with JS easily without a lot of code,
            // so we'll use inline style for the delay.
            // This is a good use case for inline styles.
            child.style.transitionDelay = `${index * 200}ms`; // 200ms delay between items
          });
        }

        // We can unobserve the element after it's visible
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe all elements with the .reveal class
  const elementsToReveal = document.querySelectorAll('.reveal');
  elementsToReveal.forEach(element => {
    observer.observe(element);
  });
}
