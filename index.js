'use strict';

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');

const PORT = process.env.PORT || 3000;

const app = express();

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const resolvers = {
  hello: () => 'Hello world',
};

app.use(
  '/api',
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
