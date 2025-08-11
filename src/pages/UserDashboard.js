// UserDashboard.js
import { fetchBooks } from '../bookAPI';

const renderUserDashboard = () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="user-dashboard">
      <header class="dashboard-header">
        <img src="https://via.placeholder.com/100" alt="User Profile" class="user-avatar">
        <h2>Welcome, User!</h2>
      </header>
      <section id="reading-list-section">
        <h3>Your Reading List</h3>
        <ul id="reading-list"></ul>
      </section>
      <section id="recently-viewed-section">
        <h3>Recently Viewed</h3>
        <ul id="recently-viewed"></ul>
      </section>
      <section id="recommended-section">
        <h3>Recommended Books</h3>
        <ul id="recommended-books"></ul>
      </section>
    </div>
  `;

  renderReadingList();
  renderRecentlyViewed();
  renderRecommendedBooks();
};

const renderReadingList = () => {
  const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  const readingListSection = document.getElementById('reading-list');

  if (readingList.length === 0) {
    readingListSection.innerHTML = '<p>Your reading list is empty.</p>';
    return;
  }

  readingList.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.title;
    readingListSection.appendChild(listItem);
  });
};

const renderRecentlyViewed = () => {
  const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  const recentlyViewedSection = document.getElementById('recently-viewed');

  if (recentlyViewed.length === 0) {
    recentlyViewedSection.innerHTML = '<p>No books viewed recently.</p>';
    return;
  }

  recentlyViewed.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.title;
    recentlyViewedSection.appendChild(listItem);
  });
};

const renderRecommendedBooks = () => {
  const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  const recommendedSection = document.getElementById('recommended-books');

  // Simulate a recommendation system by fetching random books
  fetchBooks().then(books => {
    const recommendations = books.filter(
      book => !readingList.some(readBook => readBook.id === book.id)
    );
    recommendations.slice(0, 5).forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = book.title;
      recommendedSection.appendChild(listItem);
    });
  });
};

export { renderUserDashboard };
