const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.role = role;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Manager;