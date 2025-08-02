// ===== typing.js =====

function typeWriter(element, text, speed, callback) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

export function initTypingEffect() {
  const typingTarget = document.getElementById('typing-target');
  if (typingTarget) {
    // Text to be typed
    const textToType = "Key Farel";

    // Typing speed in milliseconds
    const typingSpeed = 150;

    // Start the typing animation
    typeWriter(typingTarget, textToType, typingSpeed, () => {
      // Optional: Add a blinking cursor after typing is done
      typingTarget.style.borderRight = '2px solid white';
      setInterval(() => {
        typingTarget.style.borderRightColor = typingTarget.style.borderRightColor === 'transparent' ? 'white' : 'transparent';
      }, 500);
    });
  }
}
