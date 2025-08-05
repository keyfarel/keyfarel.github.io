import { projectData } from './data.js';

export function renderProjects() {
    const projectSection = document.getElementById('project');
    if (!projectSection) return;

    const projectsHTML = projectData.projects.map(project => `
        <div class="project-card reveal reveal-zoom">
            <div class="project-image">
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.liveUrl}" target="_blank" class="project-link" aria-label="View Live Site"><i class="fas fa-eye"></i></a>
                        <a href="${project.repoUrl}" target="_blank" class="project-link" aria-label="View Repository"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    projectSection.innerHTML = `
        <div class="parallax-bg" data-parallax-speed="0.5"></div>
        <div class="container">
            <h2 class="section-title reveal reveal-up">${projectData.title}</h2>
            <div class="projects-grid reveal reveal-stagger">
                ${projectsHTML}
            </div>
        </div>
    `;
}