// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (managerName, managerId, managerEmail, managerPhone) {
        // calling employee constructor
        super (managerName, managerId, managerEmail); 
        
        this.managerPhone = managerPhone; 
        this.managerName = managerName;
        this.managerId = managerId;
        this.managerEmail = managerEmail;
    }

    // override employee role to manager 
    getManagerPhone () {
        return "managerPhone";
    }
    getManagerName () {
        return "managerName";
    }
    getManagerId () {
        return "managerId";
    }
    getManagerEmail () {
        return "managerEmail";
    }
    getTitle () {
        return "Manager";
    }
}



// to be exported 
module.exports = Manager; 