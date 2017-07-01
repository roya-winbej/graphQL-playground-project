const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');


app.use('/graphql', graphqlHTTP({
  // schema: MyGraphQLSchema,
  graphiql: true
}));


app.listen(3030, () => {
  console.log('Listening on port 3030');
});