const Employee = require('./Employee');

// needs employee(super()), github username, getGitHub(), getRole() Overridden to return 'Engineer'
class Engineer extends Employee{
    constructor(gitHubName){
        super(name, id, email)
        this.gitHubName = gitHubName;
    }

    getGitHub(){

    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;