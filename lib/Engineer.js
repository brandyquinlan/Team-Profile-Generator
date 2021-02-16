const Employee = require('.lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email, role, github);
        this.role = role;
        this.github = github;
    }

    getRole() {
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;