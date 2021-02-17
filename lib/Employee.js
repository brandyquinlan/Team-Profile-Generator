//Employee is parent class with the following properties and methods:
//name, id, email, getName(), getId(), getEmail(), getRole()

const inquirer = require(inquirer);
class Employee {
    constructor(nam, i, emai, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}
// play();
module.exports = Employee;