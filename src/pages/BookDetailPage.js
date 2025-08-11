import { navigateTo } from '../router';
import { fetchBookDetails } from '../bookAPI';
// import { addToLibrary } from './BookCard';
//  import './BookDetailPage.css';

export const renderBookDetailPage = (bookId) => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading book details...</p>
    </div>
  `;

  fetchBookDetails(bookId).then(book => {
    if (!book) {
      app.innerHTML = `
        <div class="error-container">
          <h1>Book Not Found</h1>
          <p>We couldn't find the book you're looking for.</p>
          <button id="back-home" class="primary-button">Back to Home</button>
        </div>
      `;
      document.getElementById('back-home').addEventListener('click', () => navigateTo('home'));
      return;
    }

    app.innerHTML = `
      <div class="book-detail-container">
        <button id="back-button" class="back-button" aria-label="Go back">
          <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          Back
        </button>
        
        <div class="book-detail-content">
          <div class="book-detail-cover-container">
            <img class="book-detail-cover" src="${book.cover}" alt="Cover of ${book.title}" />
            <div class="book-detail-actions">
              <button id="add-to-library" class="action-button">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                Add to Library
              </button>
              <button id="share-book" class="action-button">
                <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                Share
              </button>
            </div>
          </div>
          
          <div class="book-detail-info">
            <div class="book-header">
              <h1 class="book-detail-title">${book.title}</h1>
              <p class="book-author">by ${book.author}</p>
              <div class="book-rating">
                ${'★'.repeat(Math.round(book.rating))}${'☆'.repeat(5 - Math.round(book.rating))}
                <span class="rating-value">${book.rating.toFixed(1)}/5.0</span>
              </div>
            </div>
            
            <div class="book-meta">
              <div class="meta-item">
                <span class="meta-label">Published:</span>
                <span class="meta-value">${book.publishYear}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Pages:</span>
                <span class="meta-value">${book.pageCount}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Genre:</span>
                <span class="meta-value">${book.genre.join(', ')}</span>
              </div>
              ${book.isbn ? `
              <div class="meta-item">
                <span class="meta-label">ISBN:</span>
                <span class="meta-value">${book.isbn}</span>
              </div>` : ''}
            </div>
            
            <div class="book-description">
              <h2>About This Book</h2>
              <p>${book.description}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event listeners
    document.getElementById('back-button').addEventListener('click', () => navigateTo('home'));
    document.getElementById('add-to-library').addEventListener('click', () => {
      addToLibrary(book);
      showToast('Book added to your library!');
    });
    document.getElementById('share-book').addEventListener('click', () => shareBook(book));
  });
};

const showToast = (message) => {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

const shareBook = (book) => {
  if (navigator.share) {
    navigator.share({
      title: book.title,
      text: `Check out "${book.title}" by ${book.author}`,
      url: window.location.href,
    }).catch(console.error);
  } else {
    // Fallback for browsers that don't support Web Share API
    const shareUrl = `mailto:?subject=${encodeURIComponent(book.title)}&body=${encodeURIComponent(
      `Check out this book: ${book.title} by ${book.author}\n\n${book.description}\n\n${window.location.href}`
    )}`;
    window.open(shareUrl, '_blank');
  }
};