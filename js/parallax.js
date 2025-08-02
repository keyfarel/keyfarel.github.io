// ===== parallax.js =====
export function initParallaxEffect() {
  const parallaxBg = document.querySelector('.hero-background');
  if (!parallaxBg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    // Move the background slower than the scroll speed
    parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
}
