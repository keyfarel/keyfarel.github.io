// main.js

import { loadHTMLPartials } from './include.js';
import { initNavbarToggle, initNavbarScrollEffect, initActiveLinkHighlight } from './navbar.js';
import { initSmoothScrolling } from './scroll.js';
import { initObserverAnimations } from './observer.js';
import { initContactForm } from './form.js';
import { initCounters } from './counter.js';
import { initSkillsAnimation } from './skills.js';
import { initTypingEffect } from './typing.js';
import { initParallaxEffect } from './parallax.js';
import { initRenderModules } from './modules/render.js';

async function main() {
  try {
    await loadHTMLPartials();
    initRenderModules();
    initNavbarToggle();
    initNavbarScrollEffect();
    initActiveLinkHighlight();
    initSmoothScrolling();
    initObserverAnimations();
    initContactForm();
    initCounters();
    initSkillsAnimation();
    initTypingEffect();
    initParallaxEffect();

  } catch (error) {
    console.error("Failed to initialize the application:", error);
  }
}

// Run the main initialization function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);
