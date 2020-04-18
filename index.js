require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');

const app = express();
const PORT = process.env.PORT || 3500;

const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8',
);

const server = new ApolloServer({ typeDefs, resolvers });

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const { status } = err;
  res.status(status).json(err);
};
app.use(errorHandler);

app.get('/probar', (req, res, next) => {
  res.status(200).json({
    is: 'working',
  });
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  }
});
