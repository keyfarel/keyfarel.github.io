export function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallaxSpeed) || 0.5;
      const fade = el.dataset.parallaxFade === 'true';
      const elementTop = el.getBoundingClientRect().top + scrollY;
      const elementHeight = el.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate the vertical movement
      const transformY = (scrollY - elementTop) * speed;

      // Calculate opacity for fade effect
      let opacity = 1;
      if (fade) {
        // Start fading when the bottom of the element is halfway up the screen
        const fadeStart = elementTop + elementHeight - viewportHeight / 2;
        if (scrollY > fadeStart) {
          const fadeDistance = (scrollY - fadeStart) / (viewportHeight / 2);
          opacity = Math.max(0, 1 - fadeDistance);
        }
      }

      // Apply the styles
      el.style.transform = `translateY(${transformY}px)`;
      if (fade) {
        el.style.opacity = opacity;
      }
    });
  });
}