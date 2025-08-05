// Fungsi Utama
export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const subject = contactForm.querySelector('#subject').value;
    const message = contactForm.querySelector('#message').value;

    let isValid = true;

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

    // Validasi Email
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

    // Validasi Subjek
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

    // Validasi Pesan
    if (!message) {
      displayError('message', 'Message is required.');
      isValid = false;
    } else if (message.length < 10) {
      displayError('message', 'Message must be at least 10 characters long.');
      isValid = false;
    } else if (message.length > 500) {
      displayError('message', 'Message cannot exceed 500 characters.');
      isValid = false;
    }

    if (isValid) {
      const submitButton = contactForm.querySelector('button[type="submit"]');

      // Start loading
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.classList.add('loading');
      }

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(response => {
          // Stop loading first
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
          }

          // Then show notification after a short delay
          setTimeout(() => {
            if (response.ok) {
              showNotification('Message sent successfully! I will get back to you soon.', 'success');
              contactForm.reset();
              contactForm.querySelectorAll('input, textarea').forEach(input => {
                const maxLength = parseInt(input.dataset.maxLength || (input.id === 'name' ? 50 : input.id === 'email' ? 100 : input.id === 'subject' ? 100 : 500));
                updateCharCount(input, maxLength);
              });
            } else {
              response.json().then(data => {
                if (data && data.errors) {
                  const isLimitError = data.errors.some(error =>
                    error.message && error.message.toLowerCase().includes('inactive')
                  );
                  if (isLimitError) {
                    showNotification('Maaf, batas pengiriman formulir untuk bulan ini telah tercapai.', 'error');
                  } else {
                    showNotification(data.errors.map(error => error.message).join(", "), 'error');
                  }
                } else {
                  showNotification('Oops! Terjadi masalah saat mengirim formulir Anda.', 'error');
                }
              });
            }
          }, 100); // 100ms delay
        })
        .catch(error => {
          // Stop loading first
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
          }
          // Then show notification
          setTimeout(() => {
            showNotification('Oops! There was a network error.', 'error');
          }, 100); // 100ms delay
        });
    } else {
      showNotification('Please correct the errors in the form.', 'error');
      const firstErrorField = contactForm.querySelector('.input-error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
      }
    }
  });

  // Event listener untuk validasi real-time dan counter karakter
  contactForm.querySelectorAll('input, textarea').forEach(input => {
    const maxLength = parseInt(input.dataset.maxLength || (input.id === 'name' ? 50 : input.id === 'email' ? 100 : input.id === 'subject' ? 100 : 500));
    updateCharCount(input, maxLength);

    input.addEventListener('input', () => {
      const fieldName = input.id;
      const errorElement = document.getElementById(`${fieldName}-error`);
      if (errorElement && errorElement.textContent) {
        clearError(fieldName);
      }

      if (input.id === 'name') {
        input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
      }

      if (input.value.length > maxLength) {
        input.value = input.value.substring(0, maxLength);
      }
      updateCharCount(input, maxLength);
    });
  });
}

// Fungsi-Fungsi Helper (diletakkan di file yang sama, di luar export)
function updateCharCount(inputElement, maxLength) {
  const currentLength = inputElement.value.length;
  const charCountElement = document.getElementById(`${inputElement.id}-char-count`);
  if (charCountElement) {
    charCountElement.textContent = `${currentLength}/${maxLength}`;
    if (currentLength > maxLength) {
      charCountElement.style.color = '#dc3545';
    } else {
      charCountElement.style.color = '';
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
    errorElement.style.display = 'block';
  }
  const inputElement = document.getElementById(field);
  if (inputElement) {
    inputElement.classList.add('input-error');
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