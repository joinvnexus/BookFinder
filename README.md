# 📚 Reading List App

A web application for managing your personal book collection. Add books to your reading list, view details, and track your progress.

## ✨ Features

- **Add/Remove Books**: Manage your reading list
- **Responsive Design**: Works on mobile, tablet & desktop
- **Dark Mode**: Eye-friendly dark theme
- **Local Storage**: Saves your collection between sessions
- **Interactive UI**: Hover effects and animations
- **Book Details**: View ratings, authors, and covers

## 🛠 Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6+)
- LocalStorage API

## 🎨 Design Elements

- Clean, card-based layout
- Smooth hover animations
- Toast notifications
- Responsive grid system
- Custom SVG icons

## 📂 Project Structure

```
BOOKFINDER/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── FilterForm.js
│   │   ├── footer.js
│   │   ├── Navbar.js
│   │   └── PaginationControls.js
│   ├── pages/
│   │   ├── BookDetailPage.js
│   │   ├── HomePage.js
│   │   ├── ReadingListPage.js
│   │   └── UserDashboard.js
│   ├── styles/
│   │   ├── BookCard.css
│   │   ├── BookDetails.css
│   │   ├── Dashboard.css
│   │   ├── footer.css
│   │   ├── HomePage.css
│   │   ├── navbar.css
│   │   ├── ReadingList.css
│   │   ├── style.css
│   │   └── theme.css
│   ├── app.js
│   ├── bookAPI.js
│   ├── mockData.js
│   ├── router.js
│   └── toggle.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## 🚀 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/reading-list.git
   ```

2. Open in your browser:

   * Simply open `index.html` in your preferred browser
   * Or use a local server (like Live Server in VSCode)

3. Use the app:

   * Browse books from the home page
   * Click "Add to Reading List" to save books
   * Access your collection via the navigation

## 🌙 Dark Mode

Toggle dark mode by adding/removing the `dark-mode` class to the `<body>` element.
The app will automatically adjust all colors using CSS variables.

## 📱 Responsive Breakpoints

* **Mobile**: < 768px (single column layout)
* **Tablet**: 768px–1024px (2 column layout)
* **Desktop**: > 1024px (3 column layout)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add some amazing feature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact

Your Name – [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/joinvnexus/BookFinder.git](https://github.com/joinvnexus/BookFinder.git)