// js/observer.js

export function initObserverAnimations() {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Start loading a bit before it's fully in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the .visible class to trigger the animation
        entry.target.classList.add('visible');
        // Stop observing the element so the animation doesn't re-trigger
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Find all elements intended to be animated and observe them.
  // This includes individual elements and containers for staggered animations.
  const elementsToAnimate = document.querySelectorAll('.animate, .stagger-children');
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}