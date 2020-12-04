function readmeTemplate(answers, newLicense) {
  return `# ${answers.title}

  ![License:](https://img.shields.io/badge/Nathan%20Larson-${answers.license}-brightgreen)

  ## Contents:

  -[Description](#description)
  -[Install](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Test](#test)
  -[License](#license)
  -[Credits](#credits)
  
  ## Description: 
    ${answers.description}

  ## Installation:
    ${answers.installation}
  
  ## Usage: 
    ${answers.usage}

  ## Contribution:
    ${answers.contribution}

  ## Testing:
    ${answers.test}

  ## License:
    ${answers.license}
    ${newLicense}

  ## Credits:
    ${answers.credit}

  ## Questions:

  For questions electronically mail me at: ${answers.email}\n
  My GitHub is [GitHub](https://github.com/${answers.username})\n
  GitHub [Repository](https://github.com/${answers.username}/${answers.repo})\n


  `;
}

module.exports = readmeTemplate;
