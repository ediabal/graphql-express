const Person = require("./types/Person");
const Organization = require("./types/Organization");
const fakeApplications = require("./fakeData/applications.json");
const fakePeople = require("./fakeData/users.json");
const fakeOrganizations = require("./fakeData/organizations.json");
const Application = require("./types/Application");

const initializeData = () => {
  global.APPLICATIONS = new Map();
  global.PEOPLE = new Map();
  global.ORGANIZATIONS = new Map();

  fakeApplications.forEach((app) =>
    global.APPLICATIONS.set(app.id, new Application(app))
  );

  fakePeople.forEach((person) => {
    person.applicationIds = [];
    fakeApplications.forEach((app) => {
      if (Math.round(Math.random())) person.applicationIds.push(app.id);
    });
    global.PEOPLE.set(person.id, new Person(person));
  });

  fakeOrganizations.forEach((organization, i) => {
    organization.uuid = `${i}-${organization.id}`;
    organization.userIds = [];
    fakePeople.forEach((person) => {
      if (Math.round(Math.random())) organization.userIds.push(person.id);
    });
    global.ORGANIZATIONS.set(organization.id, new Organization(organization));
  });
};

module.exports = initializeData;
