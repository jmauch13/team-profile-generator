// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Jennie', 80, 'jenniemauch@me.com', 4);
    
    expect(manager.managerPhone).toEqual(expect.any(Number));
});

// gets manager title
test('gets role of employee', () => {
    const manager = new Manager('Jennie', 80, 'jenniemauch@me.com');

    expect(manager.getTitle()).toEqual("Manager");
}); 