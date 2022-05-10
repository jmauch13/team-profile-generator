// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-dark text-light">
                <h3>${manager.managerName}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p class="managerId">ID: ${manager.managerId}</p>
                <p class="managerEmail">Email:<a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></p>
                <p class="managerPhone">Office Number: ${manager.managerPhone}</p>
            </div>
        </div>
    </div>
    `
};

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-dark text-light">
                <h3>${engineer.employeeName}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p class="employeeId">ID: ${engineer.employeeId}</p>
                <p class="employeeEmail">Email:<a href="mailto:${engineer.employeeEmail}">${engineer.employeeEmail}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-dark text-light">
            <h3>${intern.employeeName}</h3>
            <h4>Intern</h4>
        </div>

        <div class="card-body">
            <p class="employeeId">ID: ${intern.employeeId}</p>
            <p class="employeeEmail">Email: <a href="mailto:${intern.employeeEmail}">${intern.employeeEmail}</a></p>
            <p class="school>School: ${intern.school}</p>
        </div>
    </div>
</div>
    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const title = employee.getTitle(); 


        // call manager function
        if (title === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (title === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (title === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // join strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}


// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="./dist/style.css">
  </head>
  
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
  
      <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
                </div>
            </div>
      </main>
      
  </body>
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>


`;
}

// export to index
module.exports = generateHTML; 