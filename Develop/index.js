// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
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
},
{
    type: "input",
    name: 'github',
    message: 'enter your GitHub name:'
},
{
    type:"input",
    name: "email",
    message: 'Enter your email'
},
]
;

// TODO: Create a function to write README file
function writeToFile( data) {
    fs.writeFile("./Dist/README.md", data, (err) =>{
        if(err){
            throw err
        }
        console.log("Congratulations! Your README file has been created and added to the Dist folder")
    })
}
  

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init().then((data)=> generateMarkdown(data))
.then((markdown)=> writeToFile(markdown));


