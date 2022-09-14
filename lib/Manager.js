const Employee = require('./Employee');

// needs employee(super()), officeNumber, getRole()  Overridden to return 'Manager'
class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager;