import { heroData } from './data.js';

export function renderHeroSection() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    heroSection.innerHTML = `
        <div class="hero-background"></div>
        <div class="container hero-container">
            <div class="hero-content">
                <h1 class="hero-title animate-on-load">${heroData.title}</h1>
                <p class="hero-subtitle animate-on-load">${heroData.subtitle_prefix}<span class="highlight-role">${heroData.subtitle_role}</span><span id="typing-effect"></span></p>
                <p class="hero-description animate-on-load">${heroData.description}</p>
                <div class="hero-buttons animate-on-load">
                    <a href="${heroData.primary_button.link}" class="btn btn-primary">${heroData.primary_button.text}</a>
                    <a href="${heroData.secondary_button.link}" class="btn btn-secondary">${heroData.secondary_button.text}</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="image-placeholder animate-on-load">
                    <i class="${heroData.icon}"></i>
                </div>
            </div>
        </div>
        <a href="#about" class="scroll-indicator">
            <div class="scroll-arrow"></div>
        </a>
    `;
}
