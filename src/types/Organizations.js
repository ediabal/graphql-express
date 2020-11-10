class Organizations {
  constructor(data) {
    Object.assign(this, data);
  }

  get nodes() {
    return global.ORGANIZATIONS.values();
  }

  get count() {
    return global.ORGANIZATIONS.size;
  }
}

module.exports = Organizations;
