import { navigateTo } from '../router'; // Update path to where navigateTo is defined

const renderNavbar = () => {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  navbar.innerHTML = `
    <div class="navbar-container">
      <div class="navbar-logo">BookFinder</div>
      <div class="navbar-links" id="navbar-links">
        <a href="#" id="home-link" class="nav-link active">Home</a>
        <a href="#" id="library-link" class="nav-link">My Library</a>
        <a href="#" id="dashboard" class="nav-link">Dashboard</a>
      </div>
      <div class="navbar-right">
        <div class="theme-toggle">
          <button id="theme-toggle" aria-label="Toggle theme">🌙</button>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  `;

  document.body.prepend(navbar);

  // DOM elements
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navbar-links');
  const themeToggle = document.getElementById('theme-toggle');
  const navItems = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      navItems.forEach(navItem => navItem.classList.remove('active'));
      item.classList.add('active');
      
      // Close mobile menu if open
      if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
      
      // Navigate to the correct page
      const page = item.id.split('-')[0];
      navigateTo(page === 'home' ? 'home' : page === 'library' ? 'readingList' : 'dashboard');
    });
  });

  // Theme toggle functionality
  themeToggle.addEventListener('click', toggleTheme);

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }
};

const toggleTheme = () => {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
};

export { renderNavbar };