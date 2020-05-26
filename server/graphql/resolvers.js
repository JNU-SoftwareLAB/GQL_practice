const { books, getBookById, movies } = require('./db')
exports.resolvers = {
  Query: {
    getBooks: (_, {}) => books,
    bookCount: (_, {}) => Object.keys(books).length,
    getBookById: (_, {id}) => getBookById(id)
  },
  Book:{
    getMovieByBook:(_, {}) => movies.find((movie)=> movie.title == _.title)
  }
};