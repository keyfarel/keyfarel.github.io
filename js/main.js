// main.js

import { initNavbarToggle, initNavbarScrollEffect, initActiveLinkHighlight } from './navbar.js';
import { initSmoothScrolling, scrollToHashSection } from './scroll.js';
import { initObserverAnimations } from './observer.js';
import { initContactForm } from './form.js';
import { initCounters } from './counter.js';
import { initInteractiveSkills } from './skills.js';
import { initTypingEffect } from './typing.js';
import { initParallaxEffect } from './parallax.js';
import { initHeroAnimation } from './hero-animation.js';
import { initRenderModules } from './modules/render.js';

// Function to handle the preloader
function initPreloader() {
  const loader = document.querySelector('.loader-wrapper');
  if (loader) {
    window.addEventListener('load', () => {
      loader.classList.add('hidden');
    });
  }
}

async function main() {
  try {
    initRenderModules();
    initNavbarToggle();
    initNavbarScrollEffect();
    initActiveLinkHighlight();
    initSmoothScrolling();
    initObserverAnimations();
    initContactForm();
    initCounters();
    initInteractiveSkills();
    initTypingEffect();
    initParallaxEffect();
    initHeroAnimation();
    
    // Scroll to the section specified in the URL hash, if any
    scrollToHashSection();

  } catch (error) {
    console.error("Failed to initialize the application:", error);
  }
}

// Initialize the preloader immediately
initPreloader();

// Run the main initialization function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);