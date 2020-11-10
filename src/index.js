const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");
const resolvers = require("./resolvers/index");
const schema = require("./schemas/index");
const initializeData = require("./initializeData");

dotenv.config();

const app = express();
app.use(cors());

initializeData();

app.use(
  "/graphql",
  graphqlHTTP({ schema, rootValue: resolvers, graphiql: true })
);

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
