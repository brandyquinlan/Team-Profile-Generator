const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

// Initialize a new Employee object
// const employee = new Employee();

// Start playing
//employee.play();

// employee.play();

// let team = [{}];
// let TeamMember;

clearTeamMember = () => {
    TeamMember = {
        name: '',
        id: '',
        email: '',
        role: '',
        office: '',
        github: '',
        school: '',
    };
};

isManager = () => {
    inquirer
        .prompt([{
            name: 'isManager',
            type: 'confirm',
            message: 'Hello, are you the manager?',
            default: true
        }])
        .then((answers) => {
            if (answers.isManager === "No") {
                console.log('Sorry, this app is for managers only');
                console.log(answers.isManager);
                team.push(answers);
            } else {
                //clearTeamMember();
                console.log(answers.isManager);
                getManager();
            }
        })
        // .catch((err) => console.error(err));
};

getManager = () => {
    inquirer
        .prompt([{
            name: 'mgrName',
            type: 'input',
            message: 'What is your name?'
        }, {
            name: 'mgrId',
            type: 'input',
            message: 'What is your id?'
        }, {
            name: 'mgrEmail',
            type: 'input',
            message: 'What is your email?'
        }, {
            name: 'office',
            type: 'input',
            message: 'What is your office number?'
        }, {
            name: 'role',
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer',
                'Intern',
                'I do not want to add another member'
            ]
        }])
        .then((answers) => {
            if (answers.role === 'I do not want to add another member') {
                console.log('Goodbye');
            } else {
                console.log(answers);
                answers.role = 'Manager';
                console.log(answers);
                team.push(answers);
                console.log(team);
            }
            // if (type === 'Intern' || type === 'Engineer') {
            //     let role = 'Employee';
            //     console.log(role);
            // }
        });
}

getEmployee = () => {
    inquirer
    prompts([{
                type: 'input',
                name: 'name',
                message: 'What is the team member\'s name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team member\'s id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team member\'s email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of team member\'s school?'
            }
        ])
        .then((answers) => {});
};

newAdd = () => {
    inquirer
        .prompt([{
            name: 'role',
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer',
                'Intern',
                'I do not want to add another member'
            ]
        }])
        .then((answers) => {
            if (answers.role === 'I do not want to add another member') {
                console.log('Goodbye');
            } else {
                console.log(answers);
                team.push(answers);
                console.log(team);
                if (answers.role === 'Intern') {
                    newAdd();
                }
            }
        });
}

getIntern = () => {
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
            {
                name: 'anotherAdd',
                type: 'confirm',
                message: 'Would you like to add another team member?'
            }
        ])
        .then((answers) => {
            if (answers.anotherAdd === "No") {
                team.push(answers);
            } else {

                clearTeamMember();
                console.log(answers.anotherAdd);
                getEmployee();
            }
        })
};




// const generateHTML = (answers) =>
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">${answers.name}</h1>
//     <p class="lead">${answers.type}</p>
//     <ul class="list-group">
//       <li class="list-group-item">id: ${answers.id}</li>
//       <li class="list-group-item">email: ${answers.email}</li>
//       <li class="list-group-item">office: ${answers.office}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// inquirer
//     .prompt([{
//             type: 'input',
//             name: 'name',
//             message: 'What is the team member\'s name?'
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is the team member\'s id?'
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is the team member\'s email?'
//         },
//         {
//             type: 'input',
//             name: 'office',
//             message: 'What is the team member\'s office number?'
//         },
//         {
//             type: 'list',
//             name: 'type',
//             message: 'What type of tem member would you like to add?',
//             choices: ['Engineer',
//                 'Intern',
//                 'I do not want to add another member'
//             ]
//         }
//     ])
//     .then((answers) => {
//         const htmlPageContent = generateHTML(answers);

//         fs.writeFile('./output/index.html', htmlPageContent, (err) =>
//             err ? console.log(err) : console.log('Successfully created index.html!')
//         );
//     });