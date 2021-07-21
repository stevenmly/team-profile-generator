const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates intern object', () => {

    const intern = new Intern("Steven", "123456", "stevenly@me.com", "UT");

    expect(intern.name).toBe("Steven");
    expect(intern.id).toBe("123456");
    expect(intern.email).toBe("stevenly@me.com");
    expect(intern.school).toBe("UT");

});

test('get interns school', () => {

    const intern = new Intern("Steven", "123456", "stevenly@me.com", "UT");

    expect(intern.getSchool()).toBe("UT");

});

test('gets  role', () => {
    const intern = new Intern("Steven", "123456", "stevenly@me.com", "UT");

    expect(intern.getRole()).toBe("Intern")
}) 