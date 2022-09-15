const Employee = require('./Employee');

// needs employee(super()), github username, getGitHub(), getRole() Overridden to return 'Engineer'
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;