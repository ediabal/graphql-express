const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");
const schema = require("./schemas/index");
const initializeData = require("./initializeData");

dotenv.config();

const app = express();
app.use(cors());

initializeData();

const rootValue = {
  applications: () => global.APPLICATIONS.values(),
  application: ({ id }) => global.APPLICATIONS.get(id),
  organizations: () => global.ORGANIZATIONS.values(),
  organization: ({ id }) => global.ORGANIZATIONS.get(id),
  users: () => global.PEOPLE.values(),
  user: ({ id }) => global.PEOPLE.get(id),
};

app.use("/graphql", graphqlHTTP({ schema, rootValue, graphiql: true }));

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
