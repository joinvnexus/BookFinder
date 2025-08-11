import { renderFooter } from "../components/Footer";
import { navigateTo } from "../router";
// import './ReadingList.css';

const renderReadingListPage = () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="library-container">
      <header class="library-header">
        <button class="lib-back-btn">
          <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        </button>
        <h1 class="lib-title">My Reading Collection</h1>
        <div class="lib-stats">
          <span id="book-count">0</span> books
        </div>
      </header>
      
      <div class="lib-content">
        <div id="lib-empty-state" class="lib-empty">
          <svg class="lib-empty-icon" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
          <h2>Your Library is Empty</h2>
          <p>Discover amazing books and add them to your collection</p>
          <button class="lib-explore-btn">Browse Books</button>
        </div>
        
        <ul id="lib-book-list" class="lib-book-grid"></ul>
      </div>
    </section>
  `;

  // Back button functionality
  document.querySelector('.lib-back-btn').addEventListener('click', () => navigateTo('home'));
  
  // Explore button functionality
  document.querySelector('.lib-explore-btn')?.addEventListener('click', () => navigateTo('home'));

  const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  const bookList = document.getElementById('lib-book-list');
  const emptyState = document.getElementById('lib-empty-state');
  const bookCount = document.getElementById('book-count');

  bookCount.textContent = readingList.length;

  if (readingList.length === 0) {
    emptyState.classList.remove('hidden');
    bookList.classList.add('hidden');
  } else {
    emptyState.classList.add('hidden');
    bookList.classList.remove('hidden');

    readingList.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'lib-book-item';
      bookItem.innerHTML = `
        <article class="lib-book-card">
          <div class="lib-book-cover-container">
            <img src="${book.cover}" alt="${book.title}" class="lib-book-cover" loading="lazy">
            <div class="lib-book-actions">
              <button class="lib-remove-btn" data-id="${book.id}" aria-label="Remove book">
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
              </button>
              <button class="lib-view-btn" data-id="${book.id}" aria-label="View details">
                <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zm0 12.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/></svg>
              </button>
            </div>
          </div>
          <div class="lib-book-info">
            <h3 class="lib-book-title">${book.title}</h3>
            <p class="lib-book-author">${book.author}</p>
            ${book.rating ? `
            <div class="lib-book-rating">
              ${'★'.repeat(Math.round(book.rating))}${'☆'.repeat(5 - Math.round(book.rating))}
              <span>${book.rating.toFixed(1)}</span>
            </div>` : ''}
          </div>
        </article>
      `;
      bookList.appendChild(bookItem);
    });

    // Add event listeners
    document.querySelectorAll('.lib-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeFromReadingList(e.currentTarget.dataset.id);
      });
    });

    document.querySelectorAll('.lib-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateTo('bookDetails', e.currentTarget.dataset.id);
      });
    });

    document.querySelectorAll('.lib-book-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          const bookId = e.currentTarget.querySelector('.lib-view-btn').dataset.id;
          navigateTo('bookDetails', bookId);
        }
      });
    });
  }

  renderFooter();
};

const removeFromReadingList = (bookId) => {
  let readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  readingList = readingList.filter(book => book.id !== bookId);
  localStorage.setItem('readingList', JSON.stringify(readingList));
  
  // Show removal feedback
  const toast = document.createElement('div');
  toast.className = 'lib-toast';
  toast.textContent = 'Book removed from your library';
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('lib-toast-fade');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
  
  // Re-render the page
  renderReadingListPage();
};

export { renderReadingListPage };