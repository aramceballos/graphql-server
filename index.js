const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');

const PORT = process.env.PORT || 3000;

const app = express();

const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8',
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  '/api',
  gqlMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
