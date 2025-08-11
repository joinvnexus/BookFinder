import { navigateTo } from '../router'; // Adjust the path if needed
import { fetchBookDetails } from '../bookAPI';

export const renderBookDetailPage = (bookId) => {
  const app = document.getElementById('app');
  app.innerHTML = '<h1>Loading...</h1>';

  fetchBookDetails(bookId).then(book => {
    if (!book) {
      app.innerHTML = '<h1>Book not found</h1>';
      return;
    }

    app.innerHTML = `
      <div class="book-detail-container">
        <div class="book-detail-header">
          <img class="book-cover" src="${book.cover}" alt="${book.title}" />
          <div class="book-meta">
            <h1>${book.title}</h1>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genres:</strong> ${book.genre.join(', ')}</p>
            <p><strong>Publish Year:</strong> ${book.publishYear}</p>
            <p><strong>Pages:</strong> ${book.pageCount}</p>
            <p><strong>Rating:</strong> ${'⭐'.repeat(Math.round(book.rating))} (${book.rating.toFixed(1)})</p>
          </div>
        </div>
        <div class="book-description">
          <h2>Description</h2>
          <p>${book.description}</p>
        </div>
        <button id="back" class="back-button">Back to Home</button>
      </div>
    `;

    // Add event listener for back button
    document.getElementById('back').addEventListener('click', () => {
      navigateTo('home');
    });
  });
};
