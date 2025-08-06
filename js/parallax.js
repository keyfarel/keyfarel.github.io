export function initParallaxEffect() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  // The parallax effect ONLY applies to the content container.
  // The background is left alone to scroll normally.
  const contentContainer = heroSection.querySelector('.hero-container');
  if (!contentContainer) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    // Define the point where the content starts to fade and move up.
    // Let's use 65% of the hero's height as the trigger point.
    const animationStartPoint = heroHeight * 0.65;

    // If we are scrolling before the trigger point, do nothing. Let it scroll normally.
    if (scrollY < animationStartPoint) {
      contentContainer.style.opacity = 1;
      contentContainer.style.transform = 'translateY(0px)';
      return;
    }

    // If we are past the trigger point, calculate the animation progress.
    const animationDuration = heroHeight - animationStartPoint;
    const progress = Math.min(1, (scrollY - animationStartPoint) / animationDuration);

    // Animate the content's opacity to fade it out.
    const opacity = 1 - progress;
    contentContainer.style.opacity = Math.max(0, opacity);

    // Optionally, move the content up slightly as it fades.
    const transformY = progress * 50; // Move up by a small amount (e.g., 50px)
    contentContainer.style.transform = `translateY(-${transformY}px)`;
  });
}