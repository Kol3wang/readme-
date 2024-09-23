// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT','GPLv3', 'Apache 2.0', 'BSD 3-Clause'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];
// Function to generate README content based on user responses
function generateREADME(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Questions
  If you have any questions, please feel free to contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
    `;
  }
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('README.md has been generated successfully!');
    });
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((responses) => {
      const readmeContent = generateREADME(responses);
      writeToFile('README.md', readmeContent);
    });
  }
  
  // Function call to initialize app
  init();
