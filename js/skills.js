import { skillsData } from './modules/skill/data.js';

// Store the currently visible detail box, its corresponding skill item, and the overlay
let currentDetailBox = null;
let currentSkillItem = null;
let currentOverlay = null;

/**
 * Creates and displays the detail box for a clicked skill item.
 * @param {HTMLElement} skillItem - The skill item that was clicked.
 */
function showSkillDetail(skillItem) {
    // If the same item is clicked again, hide the detail box and exit.
    if (skillItem === currentSkillItem) {
        hideCurrentSkillDetail();
        return;
    }

    // If another box is open, close it first
    if (currentDetailBox) {
        hideCurrentSkillDetail();
    }

    // --- Get Data ---
    const navbar = document.getElementById('navbar');
    const categoryName = skillItem.closest('.skill-category').querySelector('h3').textContent;
    const skillName = skillItem.querySelector('span').textContent;
    const category = skillsData.categories.find(c => c.name === categoryName);
    const skill = category.items.find(i => i.name === skillName);

    if (!skill) return; // Exit if data not found

    // Hide navbar only on mobile when modal is open
    if (navbar && window.innerWidth <= 768) {
        navbar.classList.add('navbar-hidden');
    }

    // --- Create Overlay (for mobile) ---
    if (window.innerWidth <= 768) {
        const overlay = document.createElement('div');
        overlay.className = 'skill-overlay';
        document.body.appendChild(overlay);
        currentOverlay = overlay;
        overlay.addEventListener('click', hideCurrentSkillDetail);
    }

    // --- Create Box Element ---
    const detailBox = document.createElement('div');
    detailBox.className = 'skill-detail-box';

    // Conditional HTML based on screen size
    if (window.innerWidth <= 768) {
        // Mobile: Full-screen modal with close button and icon
        detailBox.innerHTML = `
            <button class="close-skill-detail">&times;</button>
            <div class="skill-detail-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-detail-header">
                <h4>${skill.name}</h4>
                <span class="skill-detail-level">${skill.level}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-inner"></div>
            </div>
            <p class="skill-detail-description">${skill.description}</p>
        `;
        detailBox.querySelector('.close-skill-detail').addEventListener('click', hideCurrentSkillDetail);
    } else {
        // Desktop: Simple pop-up without close button or icon
        detailBox.innerHTML = `
            <div class="skill-detail-header">
                <h4>${skill.name}</h4>
                <span class="skill-detail-level">${skill.level}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-inner"></div>
            </div>
            <p class="skill-detail-description">${skill.description}</p>
        `;
    }


    // --- Position and Show ---
    document.body.appendChild(detailBox);
    // Only apply JavaScript positioning for larger screens
    if (window.innerWidth > 768) {
        positionDetailBox(skillItem, detailBox);
    }

    // Make it visible with an animation
    requestAnimationFrame(() => {
        if (currentOverlay) {
            currentOverlay.classList.add('visible');
        }
        detailBox.classList.add('visible');

        // Use a small timeout to ensure the transition is applied correctly on all devices
        setTimeout(() => {
            const progressBarInner = detailBox.querySelector('.progress-bar-inner');
            if (progressBarInner) {
                const levelClass = `level-${skill.level.toLowerCase()}`;
                progressBarInner.classList.add(levelClass);
            }
        }, 50); // A 50ms delay is enough to ensure the browser registers the initial state
    });

    // --- Update State ---
    currentDetailBox = detailBox;
    currentSkillItem = skillItem;

    // Add a class for the bounce animation
    skillItem.classList.add('clicked');
    // Remove the class after the animation finishes
    setTimeout(() => skillItem.classList.remove('clicked'), 400);
}

/**
 * Positions the detail box relative to the skill item.
 * @param {HTMLElement} skillItem - The target skill item.
 * @param {HTMLElement} detailBox - The detail box to position.
 */
function positionDetailBox(skillItem, detailBox) {
    // Only apply JavaScript positioning for larger screens
    if (window.innerWidth > 768) {
        const itemRect = skillItem.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        // Position the box centered below the item
        let top = itemRect.bottom + window.scrollY + 10; // 10px gap
        let left = itemRect.left + window.scrollX + (itemRect.width / 2) - (detailBox.offsetWidth / 2);

        // Adjust if it goes off-screen
        if (left < 10) left = 10;
        if (left + detailBox.offsetWidth > bodyRect.width - 10) {
            left = bodyRect.width - detailBox.offsetWidth - 10;
        }

        detailBox.style.top = `${top}px`;
        detailBox.style.left = `${left}px`;
    }
}

/**
 * Hides the currently visible skill detail box and overlay.
 */
function hideCurrentSkillDetail() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.remove('navbar-hidden');
    }
    if (currentOverlay) {
        const overlayToRemove = currentOverlay;
        overlayToRemove.classList.remove('visible');
        overlayToRemove.addEventListener('transitionend', () => {
            if (overlayToRemove.parentNode) {
                overlayToRemove.remove();
            }
        }, { once: true });
    }

    if (currentDetailBox) {
        const boxToRemove = currentDetailBox; // Capture the specific box to remove
        boxToRemove.classList.remove('visible');

        // After the fade-out transition ends, remove the captured element
        boxToRemove.addEventListener('transitionend', () => {
            // Only remove if it's still in the DOM
            if (boxToRemove.parentNode) {
                boxToRemove.remove();
            }
        }, { once: true });
    }
    currentDetailBox = null;
    currentSkillItem = null;
    currentOverlay = null;
}

/**
 * Initializes the interactive skills functionality.
 */
export function initInteractiveSkills() {
    const skillsSection = document.getElementById('skill');
    if (!skillsSection) return;

    skillsSection.addEventListener('click', (event) => {
        const skillItem = event.target.closest('.skill-item');
        if (skillItem) {
            event.stopPropagation(); // Prevent the document click listener from firing immediately
            showSkillDetail(skillItem);
        }
    });

    // Add a global click listener to close the box when clicking outside
    // This works for desktop. On mobile, the overlay handles it.
    document.addEventListener('click', (event) => {
        if (currentDetailBox && !currentDetailBox.contains(event.target) && !event.target.closest('.skill-item')) {
            hideCurrentSkillDetail();
        }
    });

    // Add a resize listener to close the box when the window is resized
    window.addEventListener('resize', () => {
        hideCurrentSkillDetail();
    });
}
