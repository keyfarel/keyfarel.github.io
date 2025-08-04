export function initHeroAnimation() {
    const heroContainer = document.querySelector('.hero-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroBackground = document.querySelector('.hero-background');
    const heroSection = document.querySelector('.hero');

    if (!heroContainer || !scrollIndicator || !heroBackground || !heroSection) return;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0; // Get navbar height, default to 0 if not found

        // --- Opacity for Content and Indicator (fades over a longer distance) ---
        // Let's say content fades out over 80% of the hero section's height
        let contentOpacity = 1 - (scrollPosition / (heroHeight * 0.8));
        contentOpacity = Math.max(0, contentOpacity); // Clamp at 0
        contentOpacity = Math.min(1, contentOpacity); // Clamp at 1

        heroContainer.style.opacity = contentOpacity;
        scrollIndicator.style.opacity = contentOpacity;

        // --- Opacity for Background (fades out very quickly) ---
        // Let's make the background fade out over the first 100px of scroll
        const backgroundFadeDistance = 100;
        let backgroundOpacity = 1 - (scrollPosition / backgroundFadeDistance);
        backgroundOpacity = Math.max(0, backgroundOpacity); // Clamp at 0
        backgroundOpacity = Math.min(1, backgroundOpacity); // Clamp at 1

        heroBackground.style.opacity = backgroundOpacity;

        // --- Transform (Movement) for ALL elements ---
        // Move all elements (content, indicator, and background) up at the exact same speed as the scroll
        // This counteracts the 'sticky' positioning and makes them look like they're scrolling normally.
        const transformY = -scrollPosition;

        heroContainer.style.transform = `translateY(${transformY}px)`;
        scrollIndicator.style.transform = `translateY(${transformY}px)`;
        heroBackground.style.transform = `translateY(${transformY}px)`; // Apply transform to background

        // Fallback: Ensure elements are completely hidden if scrolled past the hero section
        if (scrollPosition > heroHeight) {
            heroContainer.style.opacity = 0;
            scrollIndicator.style.opacity = 0;
            heroBackground.style.opacity = 0;
        }
    });
}
