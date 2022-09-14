const { default: ListPrompt } = require("inquirer/lib/prompts/list") //? what is this?

// todo function that returns the license link
function renderEmployeeCards(typeEmployee) {
    if (typeEmployee==="Engineer"){
      return `I'm an  engineer`
    }
    if (typeEmployee==="Intern"){
      return `I'm an Intern`
    }
    if (typeEmployee==="No More Employees"){
      return ``
    }  
}

// todo make html 
function generateHTML(answers){
    return `html ${answers.name} and ${renderEmployeeCards(answers.typeEmployee)}`

    // todo make email clickable in html 
    // ? default email program opens and populates the TO field of the email with the address

    // todo make github username clickable
    // ? that GitHub profile opens in a new tab (a href?)

}

module.exports = generateHTML;