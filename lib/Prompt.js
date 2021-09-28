const inquirer = require("inquirer");
const Manager = require("./Manager");
const fs = require("fs");
const generateHTML = require("../generateHTML");

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

        return this.manager.generateHTML(name, id, email, office);
      })
      .then((data) => {
        return generateHTML(data);
      })
      .then((file) => {
        writeFile(file);
      });
  }
}

const writeFile = (data) => {
  fs.writeFile("team.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("File Created!");
    }
  });
};

module.exports = Prompt;
