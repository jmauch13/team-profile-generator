// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Jennie', 80, 'jenniemauch@me.com', '2University');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school 
test('gets employee school', () => {
    const intern = new Intern('Jennie', 80, 'jenniemauch@me.com', '2University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets employee's title
test('gets title of employee', () => {
    const intern = new Intern('Jennie', 80, 'jenniemauch@me.com', '2University');

    expect(intern.getTitle()).toEqual("Intern");
}); 