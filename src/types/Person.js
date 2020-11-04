class Person {
  constructor(data) {
    this.locale = "EN";
    this.timezone = "UTC";

    Object.assign(this, data);
  }

  get applications() {
    return this.applicationIds.map((id) => global.APPLICATIONS.get(id));
  }

  get organizations() {
    return [...global.ORGANIZATIONS.values()].filter((organization) =>
      organization.userIds.includes(this.id)
    );
  }
}

module.exports = Person;
