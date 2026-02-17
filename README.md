# Professional README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Inquirer](https://img.shields.io/badge/Inquirer-v13-blue)](https://www.npmjs.com/package/inquirer)
[![Chalk](https://img.shields.io/badge/Chalk-v5-orange)](https://www.npmjs.com/package/chalk)

## Description

A command-line application that dynamically generates professional `README.md` files from user input. Built with Node.js and designed with production-level standards — including color-coded terminal output, preview mode, overwrite protection, and defensive input handling — this tool goes well beyond a basic file generator.

Instead of manually writing a README from scratch for every project, developers can answer a series of guided prompts and receive a fully structured, ready-to-publish markdown file with a license badge, clickable table of contents, and contact links.

<!-- TODO: Add walkthrough screenshot or GIF here -->
<!-- ![App Screenshot](./assets/screenshot.png) -->

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Rick7Peace/professional-read-me-generator.git
cd professional-read-me-generator
npm install
```

**Requirements:** Node.js v18 or higher

## Usage

Run the application from the project root:

```bash
node index.js
```

The CLI will walk you through a series of prompts:

1. Enter your project title, description, and usage details
2. Select a license from the available options
3. Provide contribution guidelines, test instructions, and contact info
4. **Preview** the generated README directly in your terminal
5. **Confirm** before saving — with overwrite protection if a file already exists

Your generated README will be saved to `./output/GENERATED_README.md`.

## Features

**Color-Coded CLI Output** — Semantic color system built with Chalk: cyan for branding, green for success, red for errors, yellow for warnings, and magenta for highlighted values. Provides a polished, professional terminal experience.

**Preview Mode** — View the complete generated README in the terminal before committing to a file. Review your content without the save-then-open-then-edit cycle.

**Overwrite Protection** — If an output file already exists, the app prompts for explicit confirmation before replacing it. Defaults to "No" to prevent accidental data loss.

**Defensive License Lookup** — Case-insensitive license matching ensures the app never crashes from user input variations. Typing "mit", "MIT", or "Mit" all resolve correctly, with a graceful fallback to "None" for unrecognized inputs.

**Input Validation** — Required fields are enforced with custom validators, and email addresses are checked against a regex pattern before proceeding.

**Modular Architecture** — Separation of concerns across dedicated modules for prompts, license data, and markdown generation. Each module has a single responsibility and is independently maintainable.

## Architecture

```
professional-read-me-generator/
├── index.js                    # Entry point — orchestrates the CLI flow
├── lib/
│   ├── prompts.js              # Inquirer questions with input validation
│   ├── licenses.js             # License data module (single source of truth)
│   └── generateMarkdown.js     # Markdown template engine
├── output/
│   └── GENERATED_README.md     # Generated output file
├── package.json
└── .gitignore
```

## Technologies

- **Node.js** — JavaScript runtime for server-side execution
- **ES Modules (ESM)** — Modern `import/export` syntax with `"type": "module"` configuration
- **Inquirer v13** — Interactive CLI prompts with validation, list selection, and confirmation dialogs
- **Chalk v5** — Terminal string styling with semantic color-coded output
- **File System (fs)** — Native Node.js module for file existence checks and write operations

## License

This application is covered under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes using conventional commits (`git commit -m "feat: add new feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## Tests

Run the application with test inputs to verify all prompts, validation, preview mode, and overwrite protection function correctly:

```bash
node index.js
```

## Questions

For additional questions, reach out via:

- **GitHub:** [Rick7Peace](https://github.com/Rick7Peace)
- **Author:** Ricardo Marmolejo
