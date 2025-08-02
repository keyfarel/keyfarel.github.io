// js/modules/footer/render.js

import { footerData } from './data.js';

export function renderFooter() {
  const container = document.getElementById("main-footer");
  if (!container) return;

  const currentYear = new Date().getFullYear();
  const copyrightHTML = `
    <div class="container">
      <p>&copy; ${currentYear} ${footerData.copyrightName}</p>
    </div>
  `;

  container.innerHTML = copyrightHTML;
}