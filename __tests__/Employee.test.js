// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Jennie', 80, 'jenniemauch@me.com');

    expect(employee.employeeName).toEqual(expect.any(String));
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.employeeEmail).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Jennie', 80, 'jenniemauch@me.com');

    expect(employee.getEmployeeName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Jennie', 80, 'jenniemauch@me.com');

    expect(employee.getEmployeeId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Jennie', 80, 'jenniemauch@me.com.com');

    expect(employee.getEmployeeEmail()).toEqual(expect.stringContaining(employee.employeeEmail.toString()));
});

// gets employee title
test('gets title of employee', () => {
    const employee = new Employee('Jennie', 80, 'jenniemauch@me.com.com');

    expect(employee.getTitle()).toEqual("Employee");
}); 
