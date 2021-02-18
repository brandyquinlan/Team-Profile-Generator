const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Initialize a new Employee object
// const employee = new Employee();


let team = [{}];
let TeamMember;

let isManager = () => {
    inquirer
        .prompt([{
            name: 'isManager',
            type: 'confirm',
            message: 'Hello, are you the manager?'
        }])
        .then((answers) => {
            if (answers.isManager === false) {
                console.log('Sorry, this app is for managers only');
            } else {
                getManager();
            }
        })
        // .catch((err) => console.error(err));
};

let getManager = () => {
    inquirer
        .prompt([{
            name: 'name',
            type: 'input',
            message: 'What is your name?'
        }, {
            name: 'id',
            type: 'input',
            message: 'What is your id?'
        }, {
            name: 'email',
            type: 'input',
            message: 'What is your email?'
        }, {
            name: 'office',
            type: 'input',
            message: 'What is your office number?'
        }])
        .then((answers) => {
            console.log(answers);
            answers.role = 'Manager';
            console.log(answers);
            team.push(answers);
            console.log(team);
            newAdd();

        });
}

let getEngineer = () => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the engineer\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer\'s email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the name of engineer\'s github profile?'
            }
        ])
        .then((answers) => {
            answers.role = 'Engineer';
            console.log(answers);
            team.push(answers);
            console.log(team);
            newAdd();
        });
};

let newAdd = () => {
    inquirer
        .prompt([{
            name: 'role',
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer',
                'Intern',
                'Exit'
            ]
        }])
        .then((answers) => {
            if (answers.role === 'Exit') {
                console.log('Goodbye');
                const htmlPageContent = generateHTML(answers);

                fs.writeFile('./output/index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                );
            } else {
                if (answers.role === 'Engineer') {
                    getEngineer();
                }
                if (answers.role === 'Intern') {
                    getIntern();
                }

            }
        });
}

let getIntern = () => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the intern\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern\'s email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of intern\'s school?'
            },
        ])
        .then((answers) => {
            answers.role = 'Intern';
            console.log(answers);
            team.push(answers);
            console.log(team);
            newAdd();
        })
};

isManager();



const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${team[0].name}</h1>
    <p class="lead">${team[0].role}</p>
    <ul class="list-group">
      <li class="list-group-item">id: ${team[0].id}</li>
      <li class="list-group-item">email: ${team[0].email}</li>
      <li class="list-group-item">office: ${team[0].office}</li>
    </ul>
  </div>
</div>
</body>
</html>`;