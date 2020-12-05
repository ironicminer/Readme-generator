const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./template");
const util = require("util");
const getLicense = require("./grabLicense");
const writeNewFile = util.promisify(fs.writeFile);

const userQuestions = () =>
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "Install instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "How will this be used?",
      name: "usage",
    },
    {
      type: "input",
      message: "Any Contributors to the project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "Testing information?",
      name: "test",
    },
    {
      type: "list",
      message: "Choose a license",
      choices: ["Apache", "MIT", "ISC"],
      name: "license",
    },
    {
      type: "input",
      message: "Who gets credit on the project?",
      name: "credit",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
    },
    {
      type: "input",
      message: "what is the name of the repository?",
      name: "repo",
    },
  ]);

userQuestions()
  .then((answers) => {
    const newLicense = getLicense(answers);
    return writeNewFile("NEWREADME.md", template(answers, newLicense));
  })
  .then(() => console.log("New README.md Created!"))
  .catch((err) => console.log(err));
