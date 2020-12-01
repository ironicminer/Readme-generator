const fs = require("fs");
const inquirer = require("inquirer");

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
      type: "",
      message: "",
      name: "",
    },
    {
      type: "",
      message: "",
      name: "",
    },
    {
      type: "",
      message: "",
      name: "",
    },
    {
      type: "",
      message: "",
      name: "",
    },
    {
      type: "",
      message: "",
      name: "",
    },
    {
      type: "",
      message: "",
      name: "",
    },
  ]);
