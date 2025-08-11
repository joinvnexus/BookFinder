export const paginate = (items, currentPage, itemsPerPage) => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };
  
  let currentPage = 1;
const itemsPerPage = 10;

document.getElementById('nextPage').addEventListener('click', () => {
  currentPage++;
  renderPaginatedBooks(getState('books'), currentPage, itemsPerPage);
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPaginatedBooks(getState('books'), currentPage, itemsPerPage);
  }
});

