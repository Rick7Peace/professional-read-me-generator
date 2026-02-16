// Entry point — orchestrates the README generation flow
import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";
import questions from "./lib/prompts.js";
import generateMarkdown from "./lib/generateMarkdown.js";

// Write the generated README to the output directory
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(chalk.red.bold("❌ Error writing file:"), err.message)
      : console.log(
        chalk.green.bold("\n✅ successfulluy generated ") +
          chalk.magenta(fileName)
        )
      );
}

// Initialize the application
function init() {
  console.log(chalk.cyan.bold("\n🚀 Professional README Generator\n"));
  console.log(chalk.yellow("Answer the following questions to generate your README:\n"));

  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("./output/GENERATED_README.md", markdown);
  });
}

// Launch the app
init();
