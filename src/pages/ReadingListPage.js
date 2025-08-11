import { renderFooter } from "../components/Footer";
const renderReadingListPage = () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="reading-list-container">
      <h2>My Library</h2>
      <ul id="reading-list"></ul>
      <p id="empty-message" class="hidden">Your library is empty. Add some books to start reading!</p>
    </div>
  `;

  const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  const readingListSection = document.getElementById('reading-list');
  const emptyMessage = document.getElementById('empty-message');

  if (readingList.length === 0) {
    emptyMessage.classList.remove('hidden');
  } else {
    readingList.forEach(book => {
      const listItem = document.createElement('li');
      listItem.className = 'reading-list-item';
      listItem.innerHTML = `
        <div class="reading-list-content">
          <img src="${book.cover}" alt="${book.title}" class="book-cover">
          <div class="book-details">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <button class="remove-btn" data-id="${book.id}">Remove</button>
          </div>
        </div>
      `;
      readingListSection.appendChild(listItem);
    });

    // Add event listeners for remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', event => {
        const bookId = event.target.getAttribute('data-id');
        removeFromReadingList(bookId);
        renderReadingListPage(); // Re-render to update the list
      });
    });
  }
};

// Helper function to remove book from reading list
const removeFromReadingList = (bookId) => {
  let readingList = JSON.parse(localStorage.getItem('readingList')) || [];
  readingList = readingList.filter(book => book.id !== bookId);
  localStorage.setItem('readingList', JSON.stringify(readingList));
};
 renderFooter();

export { renderReadingListPage };

  