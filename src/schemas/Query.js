const gql = require("graphql-tag");

module.exports = gql`
  type Query {
    applications: [Application]
    application(id: ID): Application
    organizations: [Organization]
    organization(id: ID): Organization
    users: [Person]
    user(id: ID): Person
  }
`;
