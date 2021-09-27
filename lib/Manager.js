class Manager {
  constructor(name = "", id, email, officeNum) {
    this.job = "Manager";
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNum = officeNum;
  }

  getStats() {
    return {
      job: this.job,
      name: this.name,
      id: this.id,
      email: this.email,
      officeNum: this.officeNum,
    };
  }
}

module.exports = Manager;
