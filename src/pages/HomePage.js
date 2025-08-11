
import { fetchBooks } from '../bookAPI';
import { renderBookCard } from '../components/BookCard';

let currentPage = 1;
let currentQuery = '';
const booksPerPage = 10;

const renderHomePage = () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <header>
      <h1>Find Your Next Favorite Book</h1>
      <input type="text" id="search-bar" placeholder="Search by title, author, or genre" />
    </header>
    <section id="book-list"></section>
    <div id="pagination-controls"></div>
  `;

  // Add event listener for search functionality
  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('input', searchBooks);

  // Initial render with all books
  renderBooks();
};

const renderBooks = () => {
  fetchBooks({ query: currentQuery, page: currentPage, limit: booksPerPage }).then(data => {
    const bookList = document.getElementById('book-list');
    const paginationControls = document.getElementById('pagination-controls');

    // Clear previous content
    bookList.innerHTML = '';
    paginationControls.innerHTML = '';

    // Render books
    data.books.forEach(book => renderBookCard(book, bookList));

    // Render pagination controls
    renderPaginationControls(data.page, data.totalPages);
  });
};

const searchBooks = () => {
  currentQuery = document.getElementById('search-bar').value.trim();
  currentPage = 1; // Reset to first page for new search
  renderBooks();
};

const renderPaginationControls = (page, totalPages) => {
  const paginationControls = document.getElementById('pagination-controls');
  if (totalPages <= 1) return; // No need for pagination if only one page

  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = page === 1;
  prevButton.addEventListener('click', () => {
    if (page > 1) {
      currentPage--;
      renderBooks();
    }
  });

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = page === totalPages;
  nextButton.addEventListener('click', () => {
    if (page < totalPages) {
      currentPage++;
      renderBooks();
    }
  });

  paginationControls.appendChild(prevButton);
  paginationControls.appendChild(document.createTextNode(` Page ${page} of ${totalPages} `));
  paginationControls.appendChild(nextButton);
};

export { renderHomePage };
