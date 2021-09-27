const inquirer = require("inquirer");
const Manager = require("./Manager");

class Prompt {
  constructor() {}

  startPrompt() {
    inquirer
      .prompt([
        {
          type: "text",
          name: "name",
          message: "What is the team manager's name?",
        },
        {
          type: "number",
          name: "id",
          message: "What is the team manager's id?",
        },
        {
          type: "text",
          name: "email",
          message: "What is the team manager's email?",
        },
        {
          type: "number",
          name: "office",
          message: "What is the team manager's office number?",
        },
      ])
      .then(({ name, id, email, office }) => {
        this.manager = new Manager(name, id, email, office);

        console.log(this.manager.getStats());
      });
  }
}

module.exports = Prompt;
