const organizationsResolver = require("./organizationsResolver");

module.exports = {
  applications: () => global.APPLICATIONS.values(),
  application: ({ id }) => global.APPLICATIONS.get(id),
  organizations: organizationsResolver,
  organization: ({ id }) => global.ORGANIZATIONS.get(id),
  users: () => global.PEOPLE.values(),
  user: ({ id }) => global.PEOPLE.get(id),
};
