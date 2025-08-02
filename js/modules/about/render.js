// js/modules/about/render.js

import { aboutData } from './data.js';

export function renderAboutSection() {
  const container = document.getElementById("about-container");
  if (!container) return;

  // Membuat blok HTML untuk paragraf
  const paragraphsHTML = aboutData.paragraphs.map(p => `<p>${p}</p>`).join("");

  // Membuat blok HTML untuk statistik
  const statsHTML = aboutData.stats.map(stat => `
    <div class="stat">
      <h3>${stat.value}</h3>
      <p>${stat.label}</p>
    </div>
  `).join("");

  // Menggabungkan semua bagian menjadi satu template HTML
  container.innerHTML = `
    <div class="about-content">
      <div class="about-text">
        ${paragraphsHTML}
        <div class="about-stats">
          ${statsHTML}
        </div>
      </div>
      <div class="about-image">
        <img src="${aboutData.image.src}" alt="${aboutData.image.alt}">
      </div>
    </div>
  `;
}