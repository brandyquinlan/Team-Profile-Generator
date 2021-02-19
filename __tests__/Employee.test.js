const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('should instantiate an Employee instance', () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe('object');
    })

    it('should set name via Employee constructor argument', () => {
        const name = 'Emily';
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    })

    it('should set id via Employee constructor argument', () => {
        const empID = 100;
        const emp = new Employee('Emily', empID);
        expect(emp.id).toBe(empID);
    })

    it('should set email via Employee constructor argument', () => {
        const empEmail = 'emily@gmail.com';
        const emp = new Employee('Emily', 1, empEmail);
        expect(emp.email).toBe(empEmail);
    })
})

describe('getName()', () => {
    it('should get the name of the employee', () => {
        const empName = 'Emily';
        const emp = new Employee(empName);
        expect(emp.getName()).toBe(empName);
    })
})

describe('getId()', () => {
    it('should get the id of the employee', () => {
        const empID = 345;
        const emp = new Employee('Emily', empID);
        expect(emp.getId()).toBe(empID);
    })
})

describe('getEmail()', () => {
    it('should get the email of the employee', () => {
        const emp = new Employee('name', 'id', 'email');
        expect(emp.getEmail()).toEqual("mailto:email");
    })
})

describe('getRole()', () => {
    it('should return \'Employee\'', () => {
        // const empRole = 'Employee';
        const emp = new Employee();
        expect(emp.getRole()).toEqual('Employee');
    })
})