// js/modules/hero/render.js

import { heroData } from './data.js';

export function renderHeroSection() {
  const container = document.getElementById("home");
  if (!container) return;

  // Dynamically create the buttons
  const buttonsHTML = heroData.buttons.map(btn => `
    <a href="${btn.url}" class="btn ${btn.class}">${btn.text}</a>
  `).join('');

  // Use a real image if src is provided, otherwise use the placeholder icon
  const imageHTML = heroData.image.src
    ? `<img src="${heroData.image.src}" alt="${heroData.image.alt}">`
    : `<div class="image-placeholder"><i class="${heroData.image.placeholderIcon}"></i></div>`;

  // Assemble the full hero section HTML
  const fullHTML = `
    <div class="hero-background"></div>
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          ${heroData.greeting} <span class="highlight" id="typing-target"></span>
        </h1>
        <p class="hero-subtitle">${heroData.subtitle}</p>
        <p class="hero-description">${heroData.description}</p>
        <div class="hero-buttons">
          ${buttonsHTML}
        </div>
      </div>
      <div class="hero-image">
        ${imageHTML}
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  `;

  container.innerHTML = fullHTML;
}