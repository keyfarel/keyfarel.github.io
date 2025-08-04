import { renderHeroSection } from './hero/render.js';
import { renderAboutSection } from './about/render.js';
import { renderSkillsSection } from './skill/render.js';
import { renderProjects } from './project/render.js';
import { renderContactSection } from './contact/render.js';
import { renderFooter } from './footer/render.js';
import { renderNavbar } from './navbar/render.js';

export function initRenderModules() {
    renderNavbar();
    renderHeroSection();
    renderAboutSection();
    renderSkillsSection();
    renderProjects();
    renderContactSection();
    renderFooter();
}