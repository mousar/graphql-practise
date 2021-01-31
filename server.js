const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const PORT = process.env.PORT || 4444;
const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4444, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
