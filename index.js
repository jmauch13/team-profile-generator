// generate page
const generateHTML = require('./scr/generateHTML');


// node modules used
const inquirer = require('inquirer');
const fs = require('fs');


// team member profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// employee array
const employeeArray = [];

// manager prompts
const addManager = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the manager\'s name?',
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('Please enter the manager\'s name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager\'s ID number?',
        validate: managerIdInput => {
            if (isNaN(managerIdInput)) {
                console.log('Please enter the manager\'s ID number.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter the manager\'s email.',
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log('Please enter manager\'s email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerPhone',
        message: 'Please enter the manager\'s phone number.',
        validate: managerPhoneInput => {
            if (managerPhoneInput) {
                return true;
            } else {    
                console.log('Please enter the manager\'s phone number.');
                return false;
            }
        }
    }
])
    then(managerInput => {
        const { managerName, managerId, managerEmail, managerPhone } = managerInput;
        const manager = new Manager (managerName, managerId, managerEmail, managerPhone);

        employeeArray.push(manager);
        console.log(manager);
    })
    };

    // add employee section
    const addEmployee = () => {
        console.log(`
        Add an employee
        `);

        return inquirer.prompt ([
            {
                type: 'list',
                name: 'title',
                message: 'Please choose the employee\'s title',
                choices: ['Engineer', 'Intern']
            },
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the employee\'s name?',
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log('Please enter an employee name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee\'s ID?',
            validate: employeeIdInput => {
                if (isNaN(employeeIdInput)) {
                    console.log('Please enter the employee\'s ID.');
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please enter the employee\'s email.',
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the employee\'s email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the Engineer\'s github username.',
            when: (input) => input.title === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineer\'s github username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the Intern attend?',
            when: (input) => input.title === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the Intern\'s school');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
        ])
            .then(employeeData => {

                let { employeeName, employeeId, employeeEmail, title, github, school, confirmAddEmployee } = employeeData;
                let employee;

                if (title === 'Engineer') {
                    employee = new Engineer (employeeName, employeeId, employeeEmail, github);
                    console.log(employee);

                } else if (title === 'Intern') {
                    employee = new Intern (employeeName, employeeId, employeeEmail, school);
                    console.log(employee);
                }

                employeeArray.push(employee);

                if (confirmAddEmployee) {
                    return addEmployee(employeeArray);
                } else {
                    return employeeArray;
                }
            })
        };
    
    // generate HTML page function
    const writeFile = data => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('Your team profile has been generated!')
            }
        })
    };

    // function to add manager
    addManager()
    .then(addEmployee)
    .then(employeeArray => {
        return generateHTML(employeeArray);
    })
    .then(pageHTML => {
       return writeFile(pageHTML);
    })
    .catch(err => {
       console.log(err);
    });


    
    
















/* GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated */
