// employee constructor 
class Employee {
    constructor (employeeName, employeeId, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail 
    }

    // returning name from input
    getEmployeeName () {
        return this.employeeName;
    }

    // returning ID from input
    getEmployeeId () {
        return this.employeeId;
    }   

    // returning email from input
    getEmployeeEmail () {
        return this.employeeEmail;
    }

    // returning employee type 
    getTitle () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 