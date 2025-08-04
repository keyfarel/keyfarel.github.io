// ===== scroll.js =====
export function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });
}

export function scrollToHashSection() {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // Wait for a short moment to ensure all dynamic content is rendered and positioned
      // This might need adjustment based on content loading times
      setTimeout(() => {
        const offsetTop = target.offsetTop - 70; // Adjust for fixed header
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }, 100); // 100ms delay, adjust if needed
    }
  }
}