// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none')
    return ''
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return ''
  }
  else if(license === 'Apache license v2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }

  else if(license === 'GNU v3.0'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none')
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    projectTitle, 
    projectDescription,
    projectInstall,
    usage,
    license,
    projectContribution,
    testing,
    github,
    email
  } = data
 
  const licenseLink = renderLicenseLink(license);


  return `# 
  # Project Title
  ${projectTitle}

 
  # Project Description
  ${projectDescription}
  ## Installation
  ${projectInstall}
  ## Usage
  ${usage}
  ## License
  ${license}
  ${licenseLink}
  ## Contributions
  ${projectContribution}
  ## Test
  ${testing}
  ## GitHub User Name
  ${github}
  https://github.com/${github}
  ## Questions? email me here!
  ${email}
`;
}

module.exports = generateMarkdown;
