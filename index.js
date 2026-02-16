// Entry point — orchestrates the README generation flow
import fs from "fs";
import inquirer from "inquirer";
import questions from "./lib/prompts.js";
import generateMarkdown from "./lib/generateMarkdown.js";

// Write the generated README to the output directory
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error("Error writing file:", err)
      : console.log(`\n✅ Successfully generated ${fileName}`)
  );
}

// Initialize the application
function init() {
  console.log("\n🚀 Professional README Generator\n");
  console.log("Answer the following questions to generate your README:\n");

  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("./output/GENERATED_README.md", markdown);
  });
}

// Launch the app
init();
