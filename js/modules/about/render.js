import { aboutData } from './data.js';

export function renderAboutSection() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const statsHTML = aboutData.stats.map(stat => `
        <div class="stat">
            <h3 class="counter" data-target="${stat.value}">0</h3>
            <p>${stat.label}</p>
        </div>
    `).join('');

    aboutSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">${aboutData.title}</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>${aboutData.description}</p>
                    <div class="about-stats">
                        ${statsHTML}
                    </div>
                </div>
                <div class="about-image">
                    <img src="${aboutData.imageUrl}" alt="About Me Image">
                </div>
            </div>
        </div>
    `;
}
