//Employee is parent class with the following properties and methods:
//name, id, email, getName(), getId(), getEmail(), getRole()
class Employee {
    constructor(name, id, email, role) {
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
        return `mailto:${this.email}`;
    }
    getRole() {
        return 'Employee';
    }
}
// play();
module.exports = Employee;