const gql = require("graphql-tag");

module.exports = gql`
  type Person {
    id: ID
    applications: [Application]
    organizations: [Organization]
    firstName: String
    lastName: String
    email: String
    locale: String
    timezone: String
  }
`;
