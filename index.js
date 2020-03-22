'use strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String,
        saludo: String
    }
`);

const resolvers = {
  hello: () => 'Hello world',
  saludo: () => 'Hello everybody',
};

graphql(schema, '{saludo}', resolvers).then((data) => {
  console.log(data);
});
