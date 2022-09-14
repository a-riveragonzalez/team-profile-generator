
// todo make email clickable in html 
    // ? default email program opens and populates the TO field of the email with the address

// todo make github username clickable
    // ? that GitHub profile opens in a new tab

function generateHTML(answers){
    console.log("IT WORKS WOOOO")
    return `html ${answers.name} and ${answers.favFood}`
}

module.exports = generateHTML;