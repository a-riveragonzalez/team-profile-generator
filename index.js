const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML")

// make an empty array where the questions will get pushed 
// push questions depending on class 
// map, filter ?
// push to individual array then join them to a big array

// todo an array of questions for user input (maybe this will change depending on classes..)
const employeeArray = [];

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
        type: "input", 
        name: "officeNumber", 
        message: "what is your office number?"
    },
    {
        type: "list", 
        name: "typeEmployee", 
        message: "what type of employee would you like to add?",
        choices: ["Engineer","Intern","No More Employees"],
    },
    // {
    //     type: "input", 
    //     name: "github", 
    //     message: "what is your github username?",
    //     when(answers) {
    //         return answers.typeEmployee === "Engineer"
    //     }, 
    // },
    // {
    //     type: "input", 
    //     name: "school", 
    //     message: "what is the name of your school?",
    //     when(answers) {
    //         return answers.typeEmployee === "Intern"
    //     }, 
    // }
]





// function to create html file for team
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        (err) ? console.log("error") : console.log("HTML File Generated")
    )
}

// function to use inquirer to get user input at start
async function init() {
    let questioning = true;

    while (questioning) {
        const answers = await inquirer.prompt (questions)

        // if user chooses "no more employees" set quesioning to false and stop the loop
        if (answers.typeEmployee === "No More Employees") {
            questioning = false;
        }

        // if this, then replace question about office number with question about github
        if (answers.typeEmployee === "Engineer") {
            questions.splice(3, 1, {
                type: "input", 
                name: "github", 
                message: "what is your github username?",
            })
        }
        
        // if this, then replace question about office number with question about school
        if (answers.typeEmployee === "Intern") {
            questions.splice(3, 1, {
                type: "input", 
                name: "school", 
                message: "what is the name of your school?",
            })
        }

        // push the object with the answers to the empty employeeArray
        employeeArray.push(answers);
        
    }

    console.log(employeeArray)

    // const htmlOutput = generateHTML(answers)
    // writeToFile("team.html", htmlOutput)
    
}

// Function call to initialize app
init();
