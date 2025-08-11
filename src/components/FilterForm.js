export const renderFilterForm = (onFilterChange) => {
    const filterForm = document.createElement('form');
    filterForm.className = 'filter-form';
  
    filterForm.innerHTML = `
      <input type="text" id="filter-title" placeholder="Filter by title" />
      <input type="text" id="filter-author" placeholder="Filter by author" />
      <select id="filter-genre">
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Mystery">Mystery</option>
      </select>
      <button type="submit">Apply</button>
    `;
  
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const filter = {
        title: document.getElementById('filter-title').value,
        author: document.getElementById('filter-author').value,
        genre: document.getElementById('filter-genre').value,
      };
      onFilterChange(filter);
    });
  
    return filterForm;
  };
  