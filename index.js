// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'project',
        type: 'input',
        message: 'What is the name of your project?' 
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please add a description of your project:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        name: 'license',
        type: 'checkbox',
        message: 'Would you like to use any of the badges below for your README file?',
        choices: ['L1', 'L2', 'L3', 'L4', 'L5']
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileText = `The project name is ${data.project}`
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeToFile('README.md', answers)
    })
}

// Function call to initialize app
init();