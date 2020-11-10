const gql = require("graphql-tag");

module.exports = gql`
  type Query {
    applications: [Application]
    application(id: ID!): Application
    organizations(userId: ID!, limit: Int, offset: Int): Organizations
    organization(id: ID!): Organization
    users: [Person]
    user(id: ID!): Person
  }
`;
