// initHeroAnimation.js

export function initHeroAnimation() {
    const heroContainer = document.querySelector('.hero-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroBackground = document.querySelector('.hero-background');
    const heroSection = document.querySelector('.hero');

    if (!heroContainer || !scrollIndicator || !heroBackground || !heroSection) {
        return;
    }

    // Fungsi ini akan dipanggil setiap kali ada event scroll
    const handleScrollAnimation = () => {
        const scrollPosition = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const isMobile = window.innerWidth <= 768; // Sesuaikan dengan breakpoint CSS Anda

        let opacity = 1;
        let transformY = 0;

        if (isMobile) {
            // ===== LOGIKA BARU KHUSUS MOBILE =====

            // Biarkan parallax tetap berjalan dari awal untuk efek kedalaman
            const parallaxSpeed = 0.3; // Kecepatan paralaks bisa dibuat lebih lambat di mobile
            transformY = scrollPosition * parallaxSpeed;

            // Tentukan kapan fade harus dimulai dan berapa lama durasinya
            const startFadePosition = heroHeight * 0.60; // Mulai fade setelah 60% konten di-scroll
            const fadeDuration = heroHeight - startFadePosition; // Fade akan terjadi di sisa 40% terakhir

            if (scrollPosition >= startFadePosition) {
                // Jika sudah masuk zona fade, hitung opasitasnya
                const scrollInFadeZone = scrollPosition - startFadePosition;
                opacity = 1 - (scrollInFadeZone / fadeDuration);
            } else {
                // Jika belum, opasitas tetap 1 (terlihat penuh)
                opacity = 1;
            }

        } else {
            // ===== LOGIKA LAMA UNTUK DESKTOP =====

            // Efek Paralaks untuk Desktop
            const parallaxSpeed = 0.5;
            transformY = scrollPosition * parallaxSpeed;

            // Efek Opasitas untuk Desktop (menggunakan logika fade yang sudah ada)
            // Memisahkan konten dan background tetap ide yang bagus
            const contentFadeDistance = heroHeight * 0.9;
            const backgroundFadeDistance = heroHeight * 1.5;

            const contentOpacity = Math.max(0, 1 - (scrollPosition / contentFadeDistance));
            const backgroundOpacity = Math.max(0, 1 - (scrollPosition / backgroundFadeDistance));

            // Terapkan opasitas terpisah untuk desktop
            heroContainer.style.opacity = contentOpacity;
            scrollIndicator.style.opacity = contentOpacity;
            heroBackground.style.opacity = backgroundOpacity;

            // Terapkan transform dan keluar dari fungsi lebih awal
            heroBackground.style.transform = `translateY(${transformY}px)`;
            heroContainer.style.transform = `translateY(${transformY}px)`;
            return;
        }

        // --- TERAPKAN NILAI UNTUK MOBILE ---
        // (Kode ini hanya akan berjalan di mobile karena desktop sudah 'return' di atas)

        const finalOpacity = Math.max(0, opacity); // Pastikan tidak kurang dari 0

        // Terapkan opasitas yang sama ke semua elemen hero di mobile
        heroContainer.style.opacity = finalOpacity;
        scrollIndicator.style.opacity = finalOpacity;
        heroBackground.style.opacity = finalOpacity;

        // Terapkan transform
        heroBackground.style.transform = `translateY(${transformY}px)`;
        heroContainer.style.transform = `translateY(${transformY}px)`;
    };

    // Tambahkan event listener ke window
    window.addEventListener('scroll', handleScrollAnimation, { passive: true });
}