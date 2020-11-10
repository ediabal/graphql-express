const gql = require("graphql-tag");
const { buildASTSchema } = require("graphql");
const Query = require("./Query");
const Application = require("./Application");
const Organization = require("./Organization");
const Organizations = require("./Organizations");
const Person = require("./Person");

module.exports = buildASTSchema(gql`
  ${Query}

  ${Application}

  ${Organization}

  ${Organizations}

  ${Person}
`);
