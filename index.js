// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project? (Required)',
        
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your project name.");
                return false;
            }
        }
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please add a description of your project:',

        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your project name.");
                return false;
            }
        }
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please list your installation instructions.");
                return false;
            }
        }
    },
    {
        name: 'license',
        type: 'checkbox',
        message: 'Would you like to use any of the badges below for your README file?',
        choices: ['Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause']
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.'
    },
    {
        name: 'questions',
        type: 'input',
        message: 'Please provide your Github username and email address with instructions on how to contact you for further questions. (Required)',

        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your Github username and email.");
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('README.md', generateMarkdown(answers));
        console.log("Thank you! Please see your local README.md file to see your completed data.")
    })
}

// Function call to initialize app
init();
