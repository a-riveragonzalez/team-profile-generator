// child of employee

// needs employee(super()), school, getSchool(), getRole() Overridden to return 'Intern'

class Intern extends Employee{
    constructor(school){
        super(name, id, email)
        this.school = school;
    }

    getSchool(){
        
    }

    getRole(){
        return "Intern"
    }
}