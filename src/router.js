const routes = {
    home: () => import('./pages/HomePage').then(module => module.renderHomePage()),
    readingList: () => import('./pages/ReadingListPage').then(module => module.renderReadingListPage()),
    bookDetails: (id) => import('./pages/BookDetailPage').then(module => module.renderBookDetailPage(id)),
    dashboard :() => import ('./pages/UserDashboard').then(module => module.renderUserDashboard())
  };
  
  export const navigateTo = (page, param = null) => {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Clear previous content
  
    if (routes[page]) {
      routes[page](param); // Dynamically load and render the page
    } else {
      console.error(`Route "${page}" not found!`);
    }
  };
  