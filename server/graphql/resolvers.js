const { Books, getBookById, Movies, Authors, Items } = require('./db')
exports.resolvers = {
  Query: {
    getBooks: (_, {}) => Books,
    bookCount: (_, {}) => Object.keys(Books).length,
    getBookById: (_, {id}) => getBookById(id),
    getAuthorInfo: (_, {}) => Authors,
    getInfo: (_, {})=> Items
  },
  Book:{
    getMovieByBook:(_, {}) => Movies.find((movie)=> movie.title == _.title)
  },
  Infos:{
    __resolveType: _ => (_.reps ? "Author" : "Movie")
  }, 
  Mutation: {
    addBook: (_, args) => {
       const book = {
        id: args.id,
        author: args.author,
        title: args.title,
        description: args.description ? args.description : null
      }
      Books.push(book)
      return book
    }
  },

};