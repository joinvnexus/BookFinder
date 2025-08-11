import { renderHomePage } from './pages/HomePage';
import { renderBookDetailPage } from './pages/BookDetailPage';
import { renderReadingListPage } from './pages/ReadingListPage';
import { renderUserDashboard } from './pages/UserDashboard';
import { renderNavbar } from './components/Navbar';
import { renderFooter } from './components/Footer'; // Import footer rendering function
document.addEventListener('DOMContentLoaded', () => {

  // Initial setup of navbar
  renderNavbar();

  // Render Home page by default
  renderHomePage();

  // Render Footer
    renderFooter();
});

// Function to navigate between pages (simple routing)
const navigateTo = (page) => {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear current content

  // Conditional rendering of pages
  if (page === 'home') renderHomePage();
  if (page === 'bookDetail') renderBookDetailPage();
  if (page === 'readingList') renderReadingListPage();
  if (page === 'dashboard') renderUserDashboard(); // Add Dashboard route
  // Render Footer after content
   renderFooter();
};

export { navigateTo };
