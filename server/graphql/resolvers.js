const { getBooks } = require('./db')
exports.resolvers = {
    Query: {
      getBooks: (_, {}) => getBooks,
    },
};