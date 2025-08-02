import {renderNavbar} from './navbar/render.js';
import {renderHeroSection} from './hero/render.js';
import {renderAboutSection} from './about/render.js';
import {renderProjects} from './project/render.js';
import {renderContactSection} from './contact/render.js';
import {renderSkillsSection} from './skill/render.js';
import {renderFooter} from './footer/render.js';

/**
 * Fungsi ini berfungsi sebagai entry point untuk me-render semua
 * konten dinamis ke dalam DOM.
 */
export function initRenderModules() {
  renderNavbar();
  // renderHeroSection();
  renderAboutSection();
  renderProjects();
  renderContactSection();
  renderSkillsSection();
  renderFooter();
}