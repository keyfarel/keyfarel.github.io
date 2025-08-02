// ===== skills.js =====
export function initSkillsAnimation() {
  document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.style.transform = 'scale(0.8)';
      item.style.opacity = '0';
      item.style.transition = 'all 0.3s ease';
    });
  });

  const animateSkills = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        setTimeout(() => {
          item.style.transform = 'scale(1)';
          item.style.opacity = '1';
        }, index * 100);
      }
    });
  };

  window.addEventListener('scroll', animateSkills);
}