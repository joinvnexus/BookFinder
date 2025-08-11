const renderFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-heading">BookFinder</h3>
        <p class="footer-description">Discover your next favorite book with our extensive collection and personalized recommendations.</p>
        <p class="copyright">&copy; ${new Date().getFullYear()} BookFinder. All rights reserved.</p>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-heading">Quick Links</h3>
        <ul class="footer-links">
          <li><a href="#home" class="footer-link">Home</a></li>
          <li><a href="#library" class="footer-link">My Library</a></li>
          <li><a href="#dashboard" class="footer-link">Dashboard</a></li>
          <li><a href="#about" class="footer-link">About Us</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-heading">Support</h3>
        <ul class="footer-links">
          <li><a href="#contact" class="footer-link">Contact Us</a></li>
          <li><a href="#faq" class="footer-link">FAQs</a></li>
          <li><a href="#privacy" class="footer-link">Privacy Policy</a></li>
          <li><a href="#terms" class="footer-link">Terms of Service</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-heading">Connect With Us</h3>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg class="social-icon" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg class="social-icon" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg class="social-icon" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.12.14 4.53 1.57 4.67 4.67.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.14 3.12-1.57 4.53-4.67 4.67-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.12-.14-4.53-1.57-4.67-4.67-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.14-3.12 1.57-4.53 4.67-4.67 1.27-.06 1.65-.07 4.85-.07zm0-1.8c-3.24 0-3.65.01-4.93.07-3.73.17-5.4 1.85-5.57 5.57-.06 1.28-.07 1.69-.07 4.93 0 3.24.01 3.65.07 4.93.17 3.73 1.85 5.4 5.57 5.57 1.28.06 1.69.07 4.93.07 3.24 0 3.65-.01 4.93-.07 3.73-.17 5.4-1.85 5.57-5.57.06-1.28.07-1.69.07-4.93 0-3.24-.01-3.65-.07-4.93-.17-3.73-1.85-5.4-5.57-5.57-1.28-.06-1.69-.07-4.93-.07zm0 3.3c-2.5 0-4.53 2.03-4.53 4.53s2.03 4.53 4.53 4.53 4.53-2.03 4.53-4.53-2.03-4.53-4.53-4.53zm0 7.47c-1.62 0-2.94-1.32-2.94-2.94s1.32-2.94 2.94-2.94 2.94 1.32 2.94 2.94-1.32 2.94-2.94 2.94zm6.77-7.98c-.6 0-1.08-.48-1.08-1.08s.48-1.08 1.08-1.08 1.08.48 1.08 1.08-.48 1.08-1.08 1.08z"/></svg>
          </a>
        </div>
        <div class="newsletter">
          <p>Subscribe to our newsletter</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Your email" required>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(footer);
};

export { renderFooter };