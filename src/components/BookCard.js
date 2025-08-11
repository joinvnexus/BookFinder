import { navigateTo } from '../router';
//import './BookCard.css'; // Import the CSS file

export const renderBookCard = (book, container) => {
  const bookCard = document.createElement('article');
  bookCard.className = 'book-card';
  bookCard.tabIndex = 0;
  bookCard.setAttribute('aria-label', `${book.title} by ${book.author}`);

  bookCard.innerHTML = `
    <div class="book-cover-container">
      <img src="${book.cover || 'placeholder-book-cover.jpg'}" alt="Cover of ${book.title}" class="book-cover" />
      <div class="book-actions">
        <button id="details-${book.id}" class="view-details" aria-label="View details of ${book.title}">
          <svg class="icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zm0 12.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/></svg>
          Details
        </button>
        <button class="add-to-library-btn" data-id="${book.id}" aria-label="Add ${book.title} to library">
          <svg class="icon" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          Add to Library
        </button>
      </div>
    </div>
    <div class="book-info">
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">by ${book.author}</p>
      ${book.rating ? `<div class="book-rating">${'★'.repeat(Math.round(book.rating))}${'☆'.repeat(5 - Math.round(book.rating))}</div>` : ''}
    </div>
  `;

  container.appendChild(bookCard);

  // Add event listeners
  const detailsButton = bookCard.querySelector(`#details-${book.id}`);
  detailsButton.addEventListener('click', () => navigateTo('bookDetails', book.id));

  const addToLibraryBtn = bookCard.querySelector('.add-to-library-btn');
  addToLibraryBtn.addEventListener('click', () => addToLibrary(book));

  // Keyboard navigation support
  bookCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      navigateTo('bookDetails', book.id);
    }
  });
};

const addToLibrary = (book) => {
  const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  
  if (readingList.some(item => item.id === book.id)) {
    showToast('This book is already in your library!', 'warning');
    return;
  }

  readingList.push(book);
  localStorage.setItem('readingList', JSON.stringify(readingList));
  showToast(`"${book.title}" added to your library!`, 'success');
};

const showToast = (message, type) => {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};