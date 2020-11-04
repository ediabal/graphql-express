const gql = require("graphql-tag");

module.exports = gql`
  type Application {
    id: ID
    name: String
    uri: String
  }
`;
