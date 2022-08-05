// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [  
    //title question
    {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?"

    },
//project description
{
    type: "input",
    name: "projectDescription",
    message: "Enter a description of your project."
}, 
{
    type: "input",
    name: "projectInstall",
    message: "Enter installation instruction for your project."
},
{
    type: "input",
    name: "usage",
    message: "Enter usage instructions for your project."
},
{
    type: "list",
    name: "license",
    message: "What license will you use?",
    choices: ['yes', 'no']
},
{
    type: "input",
    name: "projectContribution",
    message: "Enter a description for contributions."
},
{
    type: "input",
    name: "testing",
    message: "Enter instructions for running a test."
}
]
;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
  

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();


