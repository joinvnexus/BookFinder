
import { mockBooks } from './mockData';

// Simulate fetching books with pagination and filtering
const fetchBooks = ({ query = '', page = 1, limit = 10 } = {}) => {
  // Filter books by query
  let filteredBooks = mockBooks;
  if (query) {
    filteredBooks = mockBooks.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  // Return paginated and filtered results along with metadata
  return Promise.resolve({
    books: paginatedBooks,
    total: filteredBooks.length,
    page,
    totalPages: Math.ceil(filteredBooks.length / limit),
  });
};

// Simulate fetching book details (mock API call)
const fetchBookDetails = (bookId) => {
  const book = mockBooks.find(book => book.id === bookId);
  return Promise.resolve(book);
};

export { fetchBooks, fetchBookDetails };


  