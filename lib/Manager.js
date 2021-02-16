const inquirer = require('inquirer');
// const fs = require('fs');
// const Intern = require('Intern');
// const Engineer = require('Engineer');
const Employee = require('./Employee');

let team = [];
let TeamMember;

class Manager extends Employee {
    constructor() {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
}

const clearTeamMember = () => {
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

const play = () => {
    inquirer
        .prompt([{
            name: 'isManager',
            type: 'confirm',
            message: 'Hello, are you the manager?'
        }])
        .then((answers) => {
            if (answers.isManager === 'No') {
                console.log('Sorry, this app is for managers only');
                return;
            } else {
                clearTeamMember();
                getManager();
            }
        });
    const getManager = () => {
        inquirer
            .prompt([{
                name: 'mgrName',
                type: 'input',
                message: 'What is the manager\'s name?'
            }, {
                name: 'mgrId',
                type: 'input',
                message: 'What is the manager\'s id?'
            }, {
                name: 'mgrEmail',
                type: 'input',
                message: 'What is the manager\'s email?'
            }, {
                name: 'office',
                type: 'input',
                message: 'What is the manager\'s office number?'
            }, {
                name: 'type',
                type: 'list',
                message: 'What type of team member would you like to add?',
                choices: ['Engineer',
                    'Intern',
                    'I do not want to add another member'
                ]
            }])
            .then((answers) => {
                if (answers.type === 'I do not want to add another member') {
                    return
                } else {
                    team.push(answers.TeamMember);
                    console.log(team);
                }
                // if (type === 'Intern' || type === 'Engineer') {
                //     let role = 'Employee';
                //     console.log(role);
                // }
            });
    }
}
play();
module.exports = Manager;