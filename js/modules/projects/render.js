// js/modules/projects/render.js
import { projects } from './data.js';

export function renderProjects() {
  const container = document.getElementById("projects-grid");

  if (!container) return;

  container.innerHTML = projects.map(project => {
    const techTags = project.tech.map(t => `<span>${t}</span>`).join("");

    return `
      <div class="project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.alt}">
          <div class="project-overlay">
            <div class="project-links">
              <a href="${project.links.live}" class="project-link"><i class="fas fa-external-link-alt"></i></a>
              <a href="${project.links.github}" class="project-link"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tech">${techTags}</div>
        </div>
      </div>
    `;
  }).join("");
}
