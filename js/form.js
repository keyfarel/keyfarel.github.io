export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return; // Ensure form exists

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors(); // Clear previous errors

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    let isValid = true;

    // Validate Name
    if (!name) {
      displayError('name', 'Name is required.');
      isValid = false;
    } else if (name.length < 2) {
      displayError('name', 'Name must be at least 2 characters long.');
      isValid = false;
    } else if (name.length > 50) {
      displayError('name', 'Name cannot exceed 50 characters.');
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      displayError('name', 'Name can only contain letters and spaces.');
      isValid = false;
    }

    // Validate Email
    if (!email) {
      displayError('email', 'Email is required.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      displayError('email', 'Please enter a valid email address.');
      isValid = false;
    } else if (email.length > 100) {
      displayError('email', 'Email cannot exceed 100 characters.');
      isValid = false;
    }

    // Validate Subject
    if (!subject) {
      displayError('subject', 'Subject is required.');
      isValid = false;
    } else if (subject.length < 5) {
      displayError('subject', 'Subject must be at least 5 characters long.');
      isValid = false;
    } else if (subject.length > 100) {
      displayError('subject', 'Subject cannot exceed 100 characters.');
      isValid = false;
    }

    // Validate Message
    if (!message) {
      displayError('message', 'Message is required.');
      isValid = false;
    } else if (message.length < 10) {
      displayError('message', 'Message must be at least 10 characters long.');
      isValid = false;
    } else if (message.length > 500) { // Assuming max 500 for message
      displayError('message', 'Message cannot exceed 500 characters.');
      isValid = false;
    }

    if (isValid) {
      // If using Formspree, you would submit the form here
      // contactForm.submit(); // Uncomment this line when integrating Formspree

      showNotification('Message sent successfully! I will get back to you soon.', 'success');
      contactForm.reset();
      // Reset character counters after successful submission
      updateCharCount(document.getElementById('name'), 50);
      updateCharCount(document.getElementById('email'), 100);
      updateCharCount(document.getElementById('subject'), 100);
      updateCharCount(document.getElementById('message'), 500);

      // Disable submit button temporarily
      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        setTimeout(() => {
          submitButton.disabled = false;
        }, 3000); // Re-enable after 3 seconds
      }
    } else {
      showNotification('Please correct the errors in the form.', 'error');
      // Scroll to the first error field
      const firstErrorField = contactForm.querySelector('.input-error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus(); // Optionally focus on the field
      }
    }
  });

  // Add event listeners for real-time validation and character counting
  contactForm.querySelectorAll('input, textarea').forEach(input => {
    const maxLength = parseInt(input.dataset.maxLength || (input.id === 'name' ? 50 : input.id === 'email' ? 100 : input.id === 'subject' ? 100 : 500));
    updateCharCount(input, maxLength);

    input.addEventListener('input', () => {
      const fieldName = input.id;
      const errorElement = document.getElementById(`${fieldName}-error`);
      if (errorElement && errorElement.textContent) { // Only clear if there's an error displayed
        clearError(fieldName);
      }

      // Specific filtering for 'name' field
      if (input.id === 'name') {
        input.value = input.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
      }

      // Truncate input if it exceeds maxLength
      if (input.value.length > maxLength) {
        input.value = input.value.substring(0, maxLength);
      }
      updateCharCount(input, maxLength);
    });
  });
}

function updateCharCount(inputElement, maxLength) {
  const currentLength = inputElement.value.length;
  const charCountElement = document.getElementById(`${inputElement.id}-char-count`);
  if (charCountElement) {
    charCountElement.textContent = `${currentLength}/${maxLength}`;
    if (currentLength > maxLength) {
      charCountElement.style.color = '#dc3545'; // Red if over limit
    } else {
      charCountElement.style.color = ''; // Reset color
    }
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(field, message) {
  const errorElement = document.getElementById(`${field}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block'; // Make sure it's visible
  }
  const inputElement = document.getElementById(field);
  if (inputElement) {
    inputElement.classList.add('input-error'); // Add a class for styling
  }
}

function clearError(field) {
  const errorElement = document.getElementById(`${field}-error`);
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }
  const inputElement = document.getElementById(field);
  if (inputElement) {
    inputElement.classList.remove('input-error');
  }
}

function clearErrors() {
  document.querySelectorAll('.error-message').forEach(el => {
    el.textContent = '';
    el.style.display = 'none';
  });
  document.querySelectorAll('.input-error').forEach(el => {
    el.classList.remove('input-error');
  });
}

function showNotification(message, type) {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.style.transform = 'translateX(0)', 100);
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}
