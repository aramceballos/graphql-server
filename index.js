require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');

const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8',
);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
