const gql = require("graphql-tag");

module.exports = gql`
  type Organizations {
    nodes: [Organization]
    count: Int
  }
`;
