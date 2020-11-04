const gql = require("graphql-tag");

module.exports = gql`
  type Organization {
    id: ID
    uuid: ID
    users: [Person]
    name: String
  }
`;
