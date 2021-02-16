const Manager = require('.lib/Manager');

// Initialize a new Game object
const manager = new Manager();

// Start playing
manager.play();




// const fs = require('fs');
// const {type} = require('.lib/Manager')


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