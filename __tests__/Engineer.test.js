const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("should extend the Employee class", () => {
        const eng = new Engineer();
        expect(eng).toBeInstanceOf(Employee);
    })
    it('should set name via Employee constructor argument', () => {
        const eng = new Engineer(name);
        expect(eng.name).toBe(name);
    })
    it('should set id via Employee constructor argument', () => {
        const empID = 100;
        const eng = new Engineer('Ernie', empID);
        expect(eng.id).toBe(empID);
    })
    it('should set email via Employee constructor argument', () => {
        const empEmail = 'Ernie@gmail.com';
        const eng = new Engineer('Ernie', 345, empEmail);
        expect(eng.email).toBe(empEmail);
    })
})

describe('getName()', () => {
    it('should return the name of the employee', () => {
        const empName = 'Ernie';
        const eng = new Engineer(empName);
        expect(eng.getName()).toBe(empName);
    })
})

describe('getId()', () => {
    it('should return the id of the employee', () => {
        const empID = 345;
        const eng = new Engineer('Ernie', empID);
        expect(eng.getId()).toBe(empID);
    })
})

describe('getEmail()', () => {
    it('should get the email of the employee', () => {
        const eng = new Engineer('name', 'id', 'email');
        expect(eng.getEmail()).toEqual("mailto:email");
    })
})

describe('getRole()', () => {
    it('should return \'Engineer\'', () => {
        const eng = new Engineer();
        expect(eng.getRole()).toEqual('Engineer');
    })
})

describe("getGithub", () => {
    it("should return the github name of the engineer", () => {
        const eng = new Engineer('name', 'id', 'email', 'role', 'github');
        expect(eng.getGithub()).toEqual("https://github.com/github");
    })
})