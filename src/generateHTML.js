const { default: ListPrompt } = require("inquirer/lib/prompts/list") //? what is this?
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// todo function that returns the license link (loop..?)
// think filter , map, loops, 
// ask questions, push constructors, 
// filter, map , push , join()

function renderEmployeeCards(employeeArray) {
    // const answerArray = employeeArray;
    // this is the empty array that all the cards html will get pushed into
    const htmlOutputArray = []

    // this is so i can test the function easily 
    const testingArray = [
        {
          name: 'arely',
          id: 'asdfas',
          email: 'asdfasd',
          officeNumber: 'asdfasd',
          typeEmployee: 'Engineer'
        },
        {
          name: 'demi',
          id: 'asdfasd',
          email: 'asdfas',
          github: 'dasdfasdf',
          typeEmployee: 'Intern'
        },
        {
          name: 'ruby',
          id: 'asdfas',
          email: 'dfasdfas',
          school: 'fsdfasd',
          typeEmployee: 'No More Employees'
        }
    ]

    // if the object has the value of officenum, then true 
    const testManager = (answer) => (answer.officeNumber) ? true : false;

    const testEngineer = (answer) => (answer.github) ? true : false;

    const testIntern = (answer) => (answer.school) ? true : false; 


    // filter array, check to see if it has an office number. if yes make it a manager
    const managerArray = testingArray.filter(testManager).map(item => new Manager(item));

    const engineerArray = testingArray.filter(testEngineer).map(item => new Engineer(item));

    const internArray = testingArray.filter(testIntern).map(item => new Intern(item));


    managerArray.forEach(function (answers){
        let managerCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4 class="card-title">${answers.name}</h4>
                        <h5>Manager</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${answers.id}</li>
                            <li class="list-group-item">Email: ${answers.email}</li>
                            <li class="list-group-item">Office number : ${answers.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </article>`
        
        htmlOutputArray.push(managerCard);
    })

    engineerArray.forEach(function (answers){
        let engineerCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4 class="card-title">${answers.name}</h4>
                        <h5>Job Position</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${answers.id}</li>
                            <li class="list-group-item">Email: ${answers.email}</li>
                            <li class="list-group-item">GitHub : ${answers.github}</li>
                        </ul>
                    </div>
                </div>
            </article> `
        
        htmlOutputArray.push(engineerCard);
    })

    internArray.forEach(function (answers){
        let internCard = `<article class="col mb-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h4 class="card-title">${answers.name}</h4>
                        <h5>Job Position</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${answers.id}</li>
                            <li class="list-group-item">Email: ${answers.email}</li>
                            <li class="list-group-item">School : ${answers.school}</li>
                        </ul>
                    </div>
                </div>
            </article>`

        htmlOutputArray.push(internCard);
    })

    console.log(htmlOutputArray)



    // filter array, check to see if it has an github. if yes make it an engineer


    // filter array, check to see if it has an school. if yes make it an intern

}

// todo make html 
function generateHTML(answers){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Document</title>
    </head>
    <body>
        <header class="jumbotron mb-3">
            <h1 class="display-4 d-flex justify-content-center">My Team Profile</h1>
        </header>
    
        <main class="mx-3">
            // <section class="row row-cols-1 row-cols-md-3">
            //     <!-- Manager Card Example -->
            //     <article class="col mb-4">
            //         <div class="card">
            //             <div class="card-header text-center">
            //                 <h4 class="card-title">${answers.name}</h4>
            //                 <h5>Manager</h5>
            //             </div>
            //             <div class="card-body">
            //                 <ul class="list-group list-group-flush">
            //                     <li class="list-group-item">ID: ${answers.id}</li>
            //                     <li class="list-group-item">Email: ${answers.email}</li>
            //                     <li class="list-group-item">Office number : ${answers.officeNumber}</li>
            //                 </ul>
            //             </div>
            //         </div>
            //     </article>
                
            //     <!-- Engineer Card Example -->
            //     ${renderEmployeeCards(answers.typeEmployee)}
    
            //     <!-- Intern Card Example -->
                
    
                
            //   </section>
            // insert function here 
    
        </main>
    
        <!-- Links -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="./assets/js/script.js"></script>
    </body>
    </html>`

    // todo make email clickable in html 
    // ? default email program opens and populates the TO field of the email with the address

    // todo make github username clickable
    // ? that GitHub profile opens in a new tab (a href?)

}

renderEmployeeCards();

module.exports = [renderEmployeeCards, generateHTML];