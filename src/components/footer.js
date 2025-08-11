const renderFooter = () => {
    // const app = document.getElementById('app');
    
    const footer = document.createElement('footer');
    footer.classList.add('footer');
  
    footer.innerHTML = `
      <div class="footer-content">
        <div class="footer-left">
          <p>&copy; 2024 BookFinder. All rights reserved.</p>
        </div>
        <div class="footer-center">
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-right">
          <ul class="social-links">
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
          </ul>
        </div>
      </div>
    `;
  
    document.body.appendChild(footer);
  };
  
  export { renderFooter };
  