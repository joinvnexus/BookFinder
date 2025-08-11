
// toggle theme 
const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.classList.contains('dark') ? 'light' : 'dark';
  
    // Toggle theme class
    body.classList.toggle('dark', currentTheme === 'dark');
  
    // Update localStorage
    localStorage.setItem('theme', currentTheme);
  
    // Update toggle button icon
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  };
  
  // Load the saved theme on page load
  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark', savedTheme === 'dark');
  
    // Update toggle button icon
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
  };
  
  export { toggleTheme, loadTheme };
  