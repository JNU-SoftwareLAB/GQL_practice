const { books } = require('./db')
exports.resolvers = {
    Query: {
      getBooks: (_, {}) => books,
    },
};