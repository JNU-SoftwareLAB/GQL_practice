const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { resolvers } = require('./graphql/resolvers'); //리졸버
const { typeDefs } = require('./graphql/schema.graphql'); //스키마

const app = express();

const server = new ApolloServer({ typeDefs , resolvers});
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
