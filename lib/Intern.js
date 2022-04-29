// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (employeeName, employeeId, employeeEmail, school) {
        // calling employee constructor
        super (employeeName, employeeId, employeeEmail); 

        this.school = school; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getTitle () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 