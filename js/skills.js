import { skillsData } from './modules/skill/data.js';

// Store the currently visible detail box and its corresponding skill item
let currentDetailBox = null;
let currentSkillItem = null;

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
    const categoryName = skillItem.closest('.skill-category').querySelector('h3').textContent;
    const skillName = skillItem.querySelector('span').textContent;
    const category = skillsData.categories.find(c => c.name === categoryName);
    const skill = category.items.find(i => i.name === skillName);

    if (!skill) return; // Exit if data not found

    // --- Create Box Element ---
    const detailBox = document.createElement('div');
    detailBox.className = 'skill-detail-box';
    detailBox.innerHTML = `
        <div class="skill-detail-section skill-detail-tech">
            <h4>${skill.name}</h4>
        </div>
        <div class="skill-detail-section skill-detail-level-section">
            <span class="skill-detail-level">${skill.level}</span>
        </div>
        <div class="skill-detail-section skill-detail-bar-section">
            <div class="progress-bar">
                <div class="progress-bar-inner"></div>
            </div>
        </div>
        <div class="skill-detail-section skill-detail-description-section">
            <p class="skill-detail-description">${skill.description}</p>
        </div>
    `;

    // --- Position and Show ---
    document.body.appendChild(detailBox);
    // Only apply JavaScript positioning for larger screens
    if (window.innerWidth > 768) {
        positionDetailBox(skillItem, detailBox);
    }

    // Make it visible with an animation
    // Use requestAnimationFrame to ensure the element is in the DOM before adding the class
    requestAnimationFrame(() => {
        detailBox.classList.add('visible');
        // Animate the progress bar
        const progressBarInner = detailBox.querySelector('.progress-bar-inner');
        if (progressBarInner) {
            progressBarInner.style.width = `${skill.percentage}%`;
        }
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
 * Hides the currently visible skill detail box.
 */
function hideCurrentSkillDetail() {
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
    document.addEventListener('click', (event) => {
        if (currentDetailBox && !currentDetailBox.contains(event.target)) {
            hideCurrentSkillDetail();
        }
    });

    // Add a resize listener to close the box when the window is resized
    window.addEventListener('resize', () => {
        hideCurrentSkillDetail();
    });
}
