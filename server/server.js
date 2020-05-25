const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { resolvers } = require('./graphql/resolvers');
const { typeDefs } = require('./graphql/schema.graphql');

const server = new ApolloServer({ typeDefs , resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
