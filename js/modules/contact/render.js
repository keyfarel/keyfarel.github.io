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
      <h2 class="section-title">${contactData.title}</h2>
      <div class="contact-content">
        <div class="contact-info">
          <h3>${contactData.info.heading}</h3>
          <p>${contactData.info.paragraph}</p>
          <div class="contact-details">
            ${detailsHTML}
          </div>
          <div class="social-links">
            ${socialsHTML}
          </div>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <input type="text" id="subject" name="subject" placeholder="Subject" required>
          </div>
          <div class="form-group">
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  `;

  container.innerHTML = fullHTML;
}