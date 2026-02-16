// License data module — Single source of truth for all license information
// Each license contains: name, badge URL, link to full text, and a summary notice

const licenses = {
    MIT: {
      name: "MIT",
      badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      link: "https://opensource.org/licenses/MIT",
      notice: "This application is covered under the MIT License.",
    },
    "Apache 2.0": {
      name: "Apache 2.0",
      badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      link: "https://opensource.org/licenses/Apache-2.0",
      notice: "This application is covered under the Apache 2.0 License.",
    },
    "GPL 3.0": {
      name: "GPL 3.0",
      badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      link: "https://www.gnu.org/licenses/gpl-3.0",
      notice: "This application is covered under the GPL 3.0 License.",
    },
    "BSD 3-Clause": {
      name: "BSD 3-Clause",
      badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      link: "https://opensource.org/licenses/BSD-3-Clause",
      notice: "This application is covered under the BSD 3-Clause License.",
    },
    None: {
      name: "None",
      badge: "",
      link: "",
      notice: "This application is not covered under any license.",
    },
  };
  
  // Helper function — returns just the license names for inquirer choices
  export const getLicenseNames = () => Object.keys(licenses);
  
// Helper function — returns full license data for a given license name (case-insensitive)
export const getLicenseData = (licenseName) => {
  const match = Object.keys(licenses).find(
    (key) => key.toLowerCase() === licenseName.toLowerCase()
  );
  return match ? licenses[match] : licenses["None"];
};

export default licenses;