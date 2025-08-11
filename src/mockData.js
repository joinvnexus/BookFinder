// Mock book data with reliable image URLs and enhanced metadata
export const mockBooks = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
    description: 'A novel set in the Roaring Twenties about the mysterious Jay Gatsby and his love for Daisy Buchanan.',
    genre: ['Classic', 'Fiction', 'Literary'],
    publishYear: 1925,
    rating: 4.2,
    pageCount: 180,
    isbn: '9780743273565',
    language: 'English',
    publisher: 'Scribner'
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    cover: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
    description: 'A dystopian novel exploring the dangers of totalitarianism and mass surveillance.',
    genre: ['Dystopian', 'Science Fiction', 'Political'],
    publishYear: 1949,
    rating: 4.7,
    pageCount: 328,
    isbn: '9780451524935',
    language: 'English',
    publisher: 'Signet Classics'
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg',
    description: 'A profound story of racial injustice and childhood in the American Deep South.',
    genre: ['Classic', 'Historical Fiction', 'Southern Gothic'],
    publishYear: 1960,
    rating: 4.9,
    pageCount: 281,
    isbn: '9780061120084',
    language: 'English',
    publisher: 'HarperCollins'
  },
  {
    id: '4',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg',
    description: 'A fantasy adventure of Bilbo Baggins in Middle-earth featuring dragons and treasure.',
    genre: ['Fantasy', 'Adventure', 'High Fantasy'],
    publishYear: 1937,
    rating: 4.8,
    pageCount: 310,
    isbn: '9780547928227',
    language: 'English',
    publisher: 'Houghton Mifflin Harcourt'
  },
  {
    id: '5',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg',
    description: 'A romantic novel of manners that critiques societal norms through Elizabeth Bennet and Mr. Darcy.',
    genre: ['Romance', 'Classic', 'Historical Fiction'],
    publishYear: 1813,
    rating: 4.5,
    pageCount: 279,
    isbn: '9780141439518',
    language: 'English',
    publisher: 'Penguin Classics'
  },
  {
    id: '6',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    cover: 'https://m.media-amazon.com/images/I/81zE42gT3xL._AC_UF1000,1000_QL80_.jpg',
    description: 'A dystopian future dominated by technology, genetic engineering, and psychological conditioning.',
    genre: ['Dystopian', 'Science Fiction', 'Philosophical'],
    publishYear: 1932,
    rating: 4.3,
    pageCount: 268,
    isbn: '9780060850524',
    language: 'English',
    publisher: 'Harper Perennial'
  },
  {
    id: '7',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    cover: 'https://m.media-amazon.com/images/I/61fgOuZfBGL._AC_UF1000,1000_QL80_.jpg',
    description: 'A story of teenage rebellion and alienation through the eyes of Holden Caulfield.',
    genre: ['Classic', 'Young Adult', 'Literary Fiction'],
    publishYear: 1951,
    rating: 4.0,
    pageCount: 214,
    isbn: '9780316769488',
    language: 'English',
    publisher: 'Little, Brown and Company'
  },
  {
    id: '8',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    cover: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Moby-Dick_FE_title_page.jpg',
    description: 'Captain Ahab\'s obsessive quest for revenge against the white whale that took his leg.',
    genre: ['Classic', 'Adventure', 'Nautical'],
    publishYear: 1851,
    rating: 3.8,
    pageCount: 585,
    isbn: '9780142437247',
    language: 'English',
    publisher: 'Penguin Classics'
  },
  {
    id: '9',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    cover: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg',
    description: 'A philosophical story of a shepherd searching for treasure and discovering life\'s wisdom.',
    genre: ['Philosophy', 'Adventure', 'Spiritual'],
    publishYear: 1988,
    rating: 4.6,
    pageCount: 208,
    isbn: '9780062315007',
    language: 'English',
    publisher: 'HarperOne'
  },
  {
    id: '10',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    cover: 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg',
    description: 'The magical beginning of Harry Potter\'s adventures at Hogwarts School of Witchcraft and Wizardry.',
    genre: ['Fantasy', 'Young Adult', 'Magic'],
    publishYear: 1997,
    rating: 4.9,
    pageCount: 309,
    isbn: '9780590353427',
    language: 'English',
    publisher: 'Scholastic'
  },
  // Additional 45 entries with realistic data
  ...Array.from({ length: 45 }, (_, i) => {
    const genres = [
      ['Mystery', 'Thriller'],
      ['Science Fiction', 'Space Opera'],
      ['Historical Fiction', 'War'],
      ['Romance', 'Contemporary'],
      ['Horror', 'Gothic'],
      ['Biography', 'Memoir'],
      ['Nonfiction', 'Science'],
      ['Fantasy', 'Epic Fantasy'],
      ['Crime', 'Noir'],
      ['Self-Help', 'Psychology']
    ];
    const publishers = [
      'Penguin Random House',
      'HarperCollins',
      'Simon & Schuster',
      'Macmillan',
      'Hachette',
      'Scholastic',
      'Oxford University Press',
      'Vintage',
      'Knopf',
      'Tor Books'
    ];
    
    const genreSet = genres[Math.floor(Math.random() * genres.length)];
    const pubYear = 1970 + Math.floor(Math.random() * 50);
    const pageCt = 200 + Math.floor(Math.random() * 400);
    
    return {
      id: (11 + i).toString(),
      title: `Sample Book ${i + 1}`,
      author: `Author ${String.fromCharCode(65 + (i % 26))}. ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][i % 5]}`,
      cover: `https://picsum.photos/seed/book${i}/300/450`,
      description: `This is a sample description for book ${i + 1} in our collection about ${genreSet.join(' and ').toLowerCase()} themes.`,
      genre: genreSet,
      publishYear: pubYear,
      rating: (3.5 + Math.random() * 1.5).toFixed(1),
      pageCount: pageCt,
      isbn: `978${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      language: 'English',
      publisher: publishers[Math.floor(Math.random() * publishers.length)]
    };
  })
];