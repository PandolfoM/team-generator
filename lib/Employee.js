class Employee {
  constructor(name = "", id, email, officeNum) {
    this.job = "Employee";
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNum = officeNum;
  }

  getJob() {
    console.log(this.job);
  }
}

module.exports = Employee;
