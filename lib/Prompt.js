const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");
const generateHTML = require("../utils/generateHTML");
const generateJob = require("../utils/generateJob");

class Prompt {
  constructor() {}

  startPrompt() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the team manager's name?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a name");
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the team manager's id?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a valid id");
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter an email address");
            }
          },
        },
        {
          type: "input",
          name: "office",
          message: "What is the team manager's office number?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a office number");
            }
          },
        },
      ])
      .then(({ name, id, email, office }) => {
        this.manager = new Manager(name, id, email, office);
        this.promptNext();
        return this.manager.generateHTML();
      })
      .then((data) => {
        return generateHTML(data);
      })
      .then((data) => {
        writeFile(data);
      });
  }

  promptEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the team engineer's name?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a name");
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the team engineer's id?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a valid id");
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team engineer's email?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter an email address");
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the team engineer's GitHub?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a GitHub username");
            }
          },
        },
      ])
      .then(({ name, id, email, github }) => {
        this.engineer = new Engineer(name, id, email, github);
        this.promptNext();
        return this.engineer.generateHTML();
      })
      .then((data) => {
        return generateJob(data);
      })
      .then((data) => {
        appendFile(data);
      });
  }

  promptIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the team intern's name?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a name");
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the team intern's id?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a valid id");
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team intern's email?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter an email address");
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What school if the intern from?",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              return ("Please enter a school");
            }
          },
        },
      ])
      .then(({ name, id, email, school }) => {
        this.intern = new Intern(name, id, email, school);
        this.promptNext();
        return this.intern.generateHTML();
      })
      .then((data) => {
        return generateJob(data);
      })
      .then((data) => {
        appendFile(data);
      });
  }

  promptNext() {
    const finishBuild = `
    </div>
    </body>
    </html>`;
    inquirer
      .prompt({
        type: "list",
        name: "next",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "Finish Building"],
      })
      .then(({ next }) => {
        if (next === "Add Engineer") {
          this.promptEngineer();
        } else if (next === "Finish Building") {
          appendFile(finishBuild);
        } else if (next === "Add Intern") {
          this.promptIntern();
        }
        return "try again";
      });
  }
}

const writeFile = (data) => {
  fs.writeFile("dist/team.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("File Created!");
    }
  });
};

const appendFile = (data) => {
  fs.appendFile("dist/team.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("File Edited!");
    }
  });
};

module.exports = Prompt;
