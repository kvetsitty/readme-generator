// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let temp = ''; 
  switch(license) {
    case 'Apache 2.0': 
      temp+=('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)') 
      break;
    case 'Boost Software 1.0':
      temp+=('[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)')
      break;
    case 'BSD 3-Clause':
      temp+=('[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)')
      break;
    default:
  }
  return temp;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {license} = data
  const badge = renderLicenseBadge(license);
  return `# ${data.title} ${badge}
## Description ${data.description}

## Table of Contents

## Installation ${data.installation}

## License ${data.license}

## Usage ${data.usage}

## Contributing ${data.contribution}

## Tests ${data.tests}

## Questions ${data.questions}
`;
}

module.exports = generateMarkdown;
