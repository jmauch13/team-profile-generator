// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (employeeName, employeeId, employeeEmail, github) {
        // calling employee constructor 
        super (employeeName, employeeId, employeeEmail);

        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

     // override employee role to engineer
    getTitle () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 