// Entry point — orchestrates the README generation flow
import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";
import questions from "./lib/prompts.js";
import generateMarkdown from "./lib/generateMarkdown.js";

const OUTPUT_PATH = "./output/GENERATED_README.md";

// Write the generated README to the output directory
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(chalk.red.bold("❌ Error writing file:"), err.message)
      : console.log(
          chalk.green.bold("\n✅ successfully generated ") +
            chalk.magenta(fileName)
        )
  );
}

// Initialize the application
async function init() {
  console.log(chalk.cyan.bold("\n🚀 Professional README Generator\n"));
  console.log(
    chalk.yellow("Answer the following questions to generate your README:\n")
  );

  const answers = await inquirer.prompt(questions);
  const markdown = generateMarkdown(answers);

  // Preview mode - show generated README before saving
  console.log(
    chalk.cyan.bold("\n📄 ── README Preview ─────────────────────────\n")
  );
  console.log(markdown);
  console.log(
    chalk.cyan.bold("──────────────────────────────────────────────\n")
  );

  const { confirmSave } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmSave",
      message: chalk.green("💾 Do you want to save this README?"),
      default: true,
    },
  ]);

  if (!confirmSave) {
    console.log(chalk.red.bold("❌ Operation discarded. No file was saved.\n"));
    return;
  }

  // overwrite protection - warn user if output file already exists
  if (fs.existsSync(OUTPUT_PATH)) {
    const { confirmOverwrite } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirmOverwrite",
        message: chalk.yellow(`⚠️ ${OUTPUT_PATH} already exists. Overwrite?`),
        default: false,
      },
    ]);

    if (!confirmOverwrite) {
      console.log(
        chalk.red.bold("❌ Operation cancelled. Your existing file is safe.\nt")
      );
      return;
    }
  }

  writeToFile(OUTPUT_PATH, markdown);
}

// Launch the app  
init();
