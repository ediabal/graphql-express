class Organization {
  constructor(data) {
    Object.assign(this, data);
  }

  get users() {
    return this.userIds.map((id) => global.PEOPLE.get(id));
  }
}

module.exports = Organization;
