const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates manager object', () => {

    const manager = new Manager("Steven", "123456", "stevenly@me.com", "999");

    expect(manager.name).toBe("Steven");
    expect(manager.id).toBe("123456");
    expect(manager.email).toBe("stevenly@me.com");
    expect(manager.officeNumber).toBe("999");

});

test('gets manager role', () => {
    const manager = new Manager("Steven", "123456", "stevenly@me.com", "999");

    expect(manager.getRole()).toBe("Manager")
}) 