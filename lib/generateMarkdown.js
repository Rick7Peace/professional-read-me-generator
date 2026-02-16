// Markdown template engine — takes user answers and returns a complete README string
import { getLicenseData } from "./licenses.js";

function generateMarkdown(data) {
  const license = getLicenseData(data.license);

  return `# ${data.title}

${license.badge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

${license.notice}

For more information, visit: ${license.link}

## Contributing

${data.contributing}

## Tests

\`\`\`
${data.tests}
\`\`\`

## Questions

For additional questions, reach out via:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;