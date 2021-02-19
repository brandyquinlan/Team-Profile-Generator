const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [{}];
let newEngineer;
let newManager;
let newIntern;


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
}

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
            answers.role = 'Manager';
            newManager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.office);
            team.push(answers);
            newAdd();
        });
}

let newAdd = () => {
    inquirer
        .prompt([{
            name: 'role',
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer',
                'Intern',
                new inquirer.Separator(),
                'Exit'
            ]
        }])
        .then((answers) => {
            if (answers.role === 'Exit') {
                console.log('Goodbye');
                const htmlPageContent = generateHTML(newManager, newEngineer, newIntern);
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
            team.push(answers);
            newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github);
            newAdd();
        });
};

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
            team.push(answers);
            newIntern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
            newAdd();
        })
};

let generateHTML = (newManager, newEngineer, newIntern) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Raleway" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
        <link rel="stylesheet" href="../src/style.css">
        <title>My Team</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid text-left">
            <h1>My Team</h1>
        </div>
        <div class="card-deck text-left mx-1">
            <div class="card manager">
                <div class="card-header">
                    <h3 class="card-title">${newManager.role}
                        <i class="fas fa-mug-hot"></i>
                    </h3>
                    <p class="lead">${newManager.name}</p>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">id: ${newManager.id}</li>
                        <li class="list-group-item">email: ${newManager.email}</li>
                        <li class="list-group-item">Office: ${newManager.office}</li>
                    </ul>
                </div>
            </div>
            <div class="card engineer">
                <div class="card-header">
                    <h3 class="card-title">${newEngineer.role}
                        <i class="fas fa-glasses"></i>
                    </h3>
                    <p class="lead">${newEngineer.name}</p>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">id: ${newEngineer.id}</li>
                        <li class="list-group-item">email: ${newEngineer.email}</li>
                        <li class="list-group-item">GitHub: ${newEngineer.github}</li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${newIntern.role}
                        <i class="fas fa-user-graduate"></i>
                    </h3>
                    <p class="lead">${newIntern.name}</p>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">id: ${newIntern.id}</li>
                        <li class="list-group-item">email: ${newIntern.email}</li>
                        <li class="list-group-item">School: ${newIntern.school}</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
    </html>`
}

isManager();