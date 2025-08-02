// ===== counter.js =====
export function initCounters() {
  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
      const rect = counter.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible && !counter.classList.contains('animated')) {
        counter.classList.add('animated');
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + '+';
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + '+';
          }
        };
        updateCounter();
      }
    });
  };
  window.addEventListener('scroll', animateCounters);
}
