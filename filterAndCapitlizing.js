// Define a list of books with authors and publication years
const books = [
    { title: "Book 1", author: "Author 1", year: 2005 },
    { title: "Book 2", author: "Author 2", year: 2012 },
    { title: "Book 3", author: "Author 3", year: 2008 },
    { title: "Book 4", author: "Author 4", year: 2015 },
  ];
  
  // Function to filter and capitalize author names
  function filterAndCapitalize(books) {
    const currentYear = new Date().getFullYear();
    return books
      .filter((book) => book.year >= 2010)
      .map((book) => ({
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year,
      }));
  }
  
  // Filter the books and capitalize author names
  const filteredBooks = filterAndCapitalize(books);
  
  // Display the resulting array
  console.log("Filtered and Capitalized Books:", filteredBooks);
  