const employee = require("../lib/employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("should extend the intern class", () => {
        const int = new Intern();
        expect(int).toBeInstanceOf(Intern);
    })
    it('should set name via intern constructor argument', () => {
        const int = new Intern(name);
        expect(int.name).toBe(name);
    })
    it('should set id via intern constructor argument', () => {
        const intID = 678;
        const int = new Intern('Irene', intID);
        expect(int.id).toBe(intID);
    })
    it('should set email via intern constructor argument', () => {
        const intEmail = 'irene@gmail.com';
        const int = new Intern('Irene', 345, intEmail);
        expect(int.email).toBe(intEmail);
    })
})

describe('getName()', () => {
    it('should return the name of the intern', () => {
        const intName = 'Irene';
        const int = new Intern(intName);
        expect(int.getName()).toBe(intName);
    })
})

describe('getId()', () => {
    it('should return the id of the intern', () => {
        const intID = 345;
        const int = new Intern('Irene', intID);
        expect(int.getId()).toBe(intID);
    })
})

describe('getEmail()', () => {
    it('should get the email of the intern', () => {
        const int = new Intern('name', 'id', 'email');
        expect(int.getEmail()).toEqual("mailto:email");
    })
})

describe('getRole()', () => {
    it('should return \'Intern\'', () => {
        const int = new Intern();
        expect(int.getRole()).toEqual('Intern');
    })
})

describe("getSchool()", () => {
    it("should return name of the intern's school", () => {
        const int = new Intern('name', 'id', 'email', 'role', 'school');
        expect(int.getSchool()).toEqual('school');
    })
})