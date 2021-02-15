const functions = require('./functions');

//* toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//* NOT.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//* CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//* isNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//* toBeFalsy
test('Should be falsy', () => {
    // expect(functions.checkValue(null)).toBeFalsy(); //PASS

    // expect(functions.checkValue(0)).toBeFalsy(); //FAIL
    expect(functions.checkValue(undefined)).toBeFalsy(); //PASS
    // expect(functions.checkValue(2)).toBeFalsy(); //FAIL
});

//* toEqual must be used with objects and arrays
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

//* toBeLessThan & toBeGreaterThan
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//* toBeLessThanOr Equal & toBeGreaterThanOrEqual
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//* Regex (regular expressions)
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i) //uppercase I and lowercase i
});

//* Arrays - toContain
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

//* Working with async data

//* PROMISE
// test('User fetched data should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => { //needed for promise
//             expect(data.name).toEqual('Leanne Graham');
//         });
// });

//* ASYNC AWAIT
test('User fetched data should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});