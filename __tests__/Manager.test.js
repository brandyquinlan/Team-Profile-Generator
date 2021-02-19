const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('should extend the Employee class', () => {
        const mgr = new Manager();
        expect(mgr).toBeInstanceOf(Employee);
    })
    it('should set name via Employee constructor argument', () => {
        const mgr = new Manager(name);
        expect(mgr.name).toBe(name);
    })
    it('should set id via Employee constructor argument', () => {
        const mgrID = 123;
        const mgr = new Manager('Brandy', mgrID);
        expect(mgr.id).toBe(mgrID);
    })
    it('should set email via Employee constructor argument', () => {
        const mgrEmail = 'brandy@gmail.com';
        const mgr = new Manager('Name', 'id', mgrEmail);
        expect(mgr.email).toBe(mgrEmail);
    })
})

describe('getName()', () => {
    it('should return the name of the employee', () => {
        const mgrName = 'Brandy';
        const mgr = new Manager(mgrName);
        expect(mgr.getName()).toBe(mgrName);
    })
})

describe('getId()', () => {
    it('should return the id of the employee', () => {
        const mgrID = 123;
        const mgr = new Manager('name', mgrID);
        expect(mgr.getId()).toBe(mgrID);
    })
})

describe('getEmail()', () => {
    it('should get the email of the employee', () => {
        const mgr = new Manager('name', 'id', 'email');
        expect(mgr.getEmail()).toEqual('mailto:email');
    })
})

describe('getRole()', () => {
    it('should return \'Manager\'', () => {
        const mgr = new Manager();
        expect(mgr.getRole()).toEqual('Manager');
    })
})

describe('getOfficeNumber()', () => {
    it('should return the office number of the Manager', () => {
        const mgr = new Manager('name', 'id', 'email', 'role', 'office');
        expect(mgr.getOfficeNumber()).toEqual('office');
    })
})