//prompts module - All inquirer questions with input validation
import { getLicenseNames } from "./licenses.js";
// Questions array for inquirer prompts
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) =>
      input.trim() ? true : "Project title cannot be empty.",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
    validate: (input) => (input.trim() ? true : "Description cannot be empty."),
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
    validate: (input) =>
      input.trim() ? true : "Usage information cannot be empty.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: getLicenseNames(),
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
    default:
      "Fork the repo, create a feature branch, and submit a pull request.",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
    default: "npm test",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: (input) =>
      input.trim() ? true : "GitHub username cannot be empty.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (input) => {
      // Regex pattern for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input)
        ? true
        : "Please enter a valid email address.";
    },
  },
];

export default questions;
