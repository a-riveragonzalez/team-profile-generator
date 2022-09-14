const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML")

// todo an array of questions for user input (maybe this will change depending on classes..)
const questions = [
    {
        type: "input", 
        name: "name", 
        message: "what is your name?"
    },
    {
        type: "input", 
        name: "id", 
        message: "what is your employee id?"
    },
    {
        type: "input", 
        name: "email", 
        message: "what is your email?"
    },
    {
        type: "list", 
        name: "typeEmployee", 
        message: "what type of employee would you like to add?",
        choices: ["Engineer", "Intern", "No More Employees"]
    }
]

// function to create html file for team
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        (err) ? console.log("error") : console.log("HTML File Generated")
    )
}

// function to use inquirer to get user input at start
function init() {
    inquirer.prompt (questions)
    .then((answers)=>{
        const htmlOutput = generateHTML(answers)
        writeToFile("team.html", htmlOutput)
    })
}

// Function call to initialize app
init();
