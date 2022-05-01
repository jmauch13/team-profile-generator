// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Jennie', 80, 'jenniemauch@me.com', 'jmauch13');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github 
test('gets engineer github value', () => {
    const engineer = new Engineer('Jennie', 80, 'jenniemauch@me.com', 'jmauch13');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets employee's title
test('gets title of employee', () => {
    const engineer = new Engineer('Jennie', 80, 'jenniemauch@me.com', 'jmauch13');

    expect(engineer.getTitle()).toEqual("Engineer");
});