export const renderPaginationControls = (pagination, onPageChange) => {
    const { page, totalPages } = pagination;
  
    const paginationControls = document.createElement('div');
    paginationControls.className = 'pagination-controls';
  
    paginationControls.innerHTML = `
      <button ${page === 1 ? 'disabled' : ''} id="prev-page">Previous</button>
      <span>Page ${page} of ${totalPages}</span>
      <button ${page === totalPages ? 'disabled' : ''} id="next-page">Next</button>
    `;
  
    paginationControls.querySelector('#prev-page').addEventListener('click', () => {
      onPageChange(page - 1);
    });
  
    paginationControls.querySelector('#next-page').addEventListener('click', () => {
      onPageChange(page + 1);
    });
  
    return paginationControls;
  };
  