const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {

    const engineer = new Engineer("Steven", "123456", "stevenly@me.com", "stevenmly");

    expect(engineer.name).toBe("Steven");
    expect(engineer.id).toBe("123456");
    expect(engineer.email).toBe("stevenly@me.com");
    expect(engineer.github).toBe("stevenmly");

});

test('gets GitHub username', () => {

    const engineer = new Engineer("Steven", "123456", "stevenly@me.com", "stevenmly");

    expect(engineer.getGithub()).toBe("stevenmly");

});

test('gets engineer role', () => {
    const engineer = new Engineer("Steven", "123456", "stevenly@me.com", "stevenmly");

    expect(engineer.getRole()).toBe("Engineer")
}) 