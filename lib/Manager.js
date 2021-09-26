class Manager {
  constructor(name = "", id, email, officeNum) {
    this.job = "Manager";
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNum = officeNum;
  }
}

module.exports = Manager;
