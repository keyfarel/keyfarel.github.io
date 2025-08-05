import { skillsData } from './data.js';

export function renderSkillsSection() {
  const container = document.getElementById("skill");
  if (!container) return;

  // Membuat blok HTML untuk setiap kategori skill
  const categoriesHTML = skillsData.categories.map(category => {
    // Untuk setiap kategori, buat list item skill-nya
    const itemsHTML = category.items.map(item => `
      <div class="skill-item">
        <i class="${item.icon}"></i>
        <span>${item.name}</span>
      </div>
    `).join('');

    // Kembalikan HTML untuk satu kategori penuh
    return `
      <div class="skill-category reveal reveal-up">
        <h3>${category.name}</h3>
        <div class="skill-items">
          ${itemsHTML}
        </div>
      </div>
    `;
  }).join('');

  // Rakit semua bagian menjadi HTML utuh
  const fullHTML = `
    <div class="container">
      <h2 class="section-title reveal reveal-up">${skillsData.title}</h2>
      <div class="skills-grid reveal reveal-stagger">
        ${categoriesHTML}
      </div>
    </div>
  `;

  container.innerHTML = fullHTML;
}