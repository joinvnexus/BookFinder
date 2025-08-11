import { fetchBooks } from '../bookAPI';
import { renderBookCard } from '../components/BookCard';
import '../styles/styles.css'; // Import the CSS file

let currentPage = 1;
let currentQuery = '';
const booksPerPage = 10;
let isLoading = false;

const renderHomePage = () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="home-container">
      <header class="search-header">
        <h1>Find Your Next Favorite Book</h1>
        <div class="search-container">
          <input type="text" id="search-bar" placeholder="Search by title, author, or genre" />
          <button id="search-button" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
      </header>
      <section id="book-list" class="book-grid"></section>
      <div id="loading-indicator" class="loading-indicator"></div>
      <div id="pagination-controls" class="pagination-controls"></div>
    </div>
  `;

  const searchBar = document.getElementById('search-bar');
  const searchButton = document.getElementById('search-button');

  // Search on button click or Enter key
  searchButton.addEventListener('click', searchBooks);
  searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBooks();
  });

  // Initial render
  renderBooks();
};

const renderBooks = async () => {
  if (isLoading) return;
  
  isLoading = true;
  showLoading(true);
  
  try {
    const data = await fetchBooks({ query: currentQuery, page: currentPage, limit: booksPerPage });
    const bookList = document.getElementById('book-list');
    const paginationControls = document.getElementById('pagination-controls');

    bookList.innerHTML = '';
    paginationControls.innerHTML = '';

    if (data.books.length === 0) {
      bookList.innerHTML = '<p class="no-results">No books found. Try a different search.</p>';
    } else {
      data.books.forEach(book => renderBookCard(book, bookList));
    }

    renderPaginationControls(data.page, data.totalPages);
  } catch (error) {
    console.error('Error fetching books:', error);
    document.getElementById('book-list').innerHTML = '<p class="error-message">Failed to load books. Please try again later.</p>';
  } finally {
    isLoading = false;
    showLoading(false);
  }
};

const searchBooks = () => {
  currentQuery = document.getElementById('search-bar').value.trim();
  currentPage = 1;
  renderBooks();
};

const renderPaginationControls = (page, totalPages) => {
  const paginationControls = document.getElementById('pagination-controls');
  if (totalPages <= 1) return;

  paginationControls.innerHTML = '';

  const prevButton = document.createElement('button');
  prevButton.className = 'pagination-button';
  prevButton.innerHTML = '&laquo; Previous';
  prevButton.disabled = page === 1;
  prevButton.addEventListener('click', () => {
    if (page > 1) {
      currentPage--;
      renderBooks();
    }
  });

  const pageInfo = document.createElement('span');
  pageInfo.className = 'page-info';
  pageInfo.textContent = `Page ${page} of ${totalPages}`;

  const nextButton = document.createElement('button');
  nextButton.className = 'pagination-button';
  nextButton.innerHTML = 'Next &raquo;';
  nextButton.disabled = page === totalPages;
  nextButton.addEventListener('click', () => {
    if (page < totalPages) {
      currentPage++;
      renderBooks();
    }
  });

  paginationControls.appendChild(prevButton);
  paginationControls.appendChild(pageInfo);
  paginationControls.appendChild(nextButton);
};

const showLoading = (show) => {
  const loader = document.getElementById('loading-indicator');
  loader.style.display = show ? 'block' : 'none';
};

export { renderHomePage };