// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'project',
        type: "input",
        message: "What is the name of your project?" 
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
