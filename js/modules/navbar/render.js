import { navbarData } from './data.js';

export function renderNavbar() {
  const container = document.getElementById("navbar");
  if (!container) return;

  // Membuat link navigasi secara dinamis dari data
  const linksHTML = navbarData.links.map(link => `
    <a href="${link.url}" class="nav-link">${link.text}</a>
  `).join('');

  // Merakit HTML navbar secara lengkap
  const fullHTML = `
    <div class="nav-container">
      <div class="nav-logo">
        <a href="${navbarData.logo.url}">${navbarData.logo.text}</a>
      </div>
      <div class="nav-menu" id="nav-menu">
        ${linksHTML}
      </div>
      <div class="nav-toggle" id="nav-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  `;

  container.innerHTML = fullHTML;
}