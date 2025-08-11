import { navigateTo } from '../router'; // Ensure navigateTo is imported


export const renderBookCard = (book, container, ) => {
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';

  bookCard.innerHTML = `
  
    <img src="${book.cover}" alt="${book.title}" />
    <h3>${book.title}</h3>
    <p>by ${book.author}</p>
    <button id="details-${book.id}" class="view-details">View Details</button>
    <button class="add-to-library-btn" data-id="${book.id}">Add to Library</button>

  `;

  container.appendChild(bookCard);

  // Add event listener for "View Details" button
  const detailsButton = document.getElementById(`details-${book.id}`);
  detailsButton.addEventListener('click', () => {
    navigateTo('bookDetails', book.id); // Pass book ID to the navigate function
  });

 //Add event listener for "Add to Library" button
  const addToLibraryBtn = bookCard.querySelector('.add-to-library-btn');
  addToLibraryBtn.addEventListener('click', () => addToLibrary(book));
};

// Helper function to add a book to the library (reading list)
const addToLibrary = (book) => {
  const readingList = JSON.parse(localStorage.getItem('readingList')) || [];

  // Check if the book is already in the reading list
  const isAlreadyAdded = readingList.some(item => item.id === book.id);
  if (isAlreadyAdded) {
    alert('This book is already in your library!');
    return;
  }

  // Add the book to the reading list and save to localStorage
  readingList.push(book);
  localStorage.setItem('readingList', JSON.stringify(readingList));
  alert(`"${book.title}" has been added to your library!`);
};

