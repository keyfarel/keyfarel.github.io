// js/modules/contact/render.js

import { contactData } from './data.js';

export function renderContactSection() {
  const container = document.getElementById("contact");
  if (!container) return;

  // Membuat list item detail kontak secara dinamis
  const detailsHTML = contactData.details.map(item => `
    <div class="contact-item">
      <i class="${item.icon}"></i>
      <a href="${item.link}">${item.text}</a>
    </div>
  `).join('');

  // Membuat link sosial secara dinamis
  const socialsHTML = contactData.socials.map(social => `
    <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-link">
      <i class="${social.icon}"></i>
    </a>
  `).join('');

  // Merakit semua bagian menjadi HTML utuh
  const fullHTML = `
    <div class="container">
      <h2 class="section-title reveal reveal-up">${contactData.title}</h2>
      <div class="contact-content">
        <div class="contact-info reveal reveal-left">
          <h3>${contactData.info.heading}</h3>
          <p>${contactData.info.paragraph}</p>
          <div class="contact-details">
            ${detailsHTML}
          </div>
          <div class="social-links">
            ${socialsHTML}
          </div>
        </div>
        <form action="https://formspree.io/f/myzpnplp" method="POST" class="contact-form reveal reveal-right" id="contact-form" novalidate>
          <div class="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required>
            <div class="validation-feedback">
              <span class="error-message" id="name-error"></span>
              <span class="char-count" id="name-char-count">0/50</span>
            </div>
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Your Email" required>
            <div class="validation-feedback">
              <span class="error-message" id="email-error"></span>
              <span class="char-count" id="email-char-count">0/100</span>
            </div>
          </div>
          <div class="form-group">
            <input type="text" id="subject" name="subject" placeholder="Subject" required>
            <div class="validation-feedback">
              <span class="error-message" id="subject-error"></span>
              <span class="char-count" id="subject-char-count">0/100</span>
            </div>
          </div>
          <div class="form-group">
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            <div class="validation-feedback">
              <span class="error-message" id="message-error"></span>
              <span class="char-count" id="message-char-count">0/500</span>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  `;

  container.innerHTML = fullHTML;
}