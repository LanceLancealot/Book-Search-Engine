const books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    // Add more books as needed
  ];
  
  const resolvers = {
    Query: {
      books: () => books,
    },
    Mutation: {
      addBook: (_, { title, author }) => {
        const newBook = { title, author };
        books.push(newBook);
        return newBook;
      },
    },
  };
  
  module.exports = resolvers;
  