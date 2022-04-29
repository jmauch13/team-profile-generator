// employee constructor 
class Employee {
    constructor (employeeName, employeeId, employeeEmail) {
        this.name = employeeName;
        this.id = employeeId;
        this.email = employeeEmail 
    }

    // returning name from input
    getemployeeName () {
        return this.employeeName;
    }

    // returning ID from input
    getemployeeId () {
        return this.employeeId;
    }   

    // returning email from input
    getemployeeEmail () {
        return this.employeeEmail;
    }

    // returning employee type 
    getTitle () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 