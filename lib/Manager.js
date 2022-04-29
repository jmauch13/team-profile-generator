// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (managerName, managerId, managerEmail, managerPhone) {
        // calling employee constructor
        super (managerName, managerId, managerEmail); 
        
        this.managerPhone = managerPhone; 
    }

    // override employee role to manager 
    getTitle () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 