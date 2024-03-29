// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "n/a") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "n/a") {
    return `{[License](#License)}`
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license != "n/a") {
  return ` ## License ${License}`
  } else {
    return ``;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.Description}

  ## Usage 
  ${data.Usage}

  ## License 
  ${data.License}

  ## Contributing 
  ${data.contributation}

  ## Test
  ${data.Test}

  ## Contact 
  ${data.contact}
`;
}

module.exports = generateMarkdown;
