const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {

    const employee = new Employee("Steven", "123456", "stevenly@me.com");

    expect(employee.name).toBe("Steven");
    expect(employee.id).toBe("123456");
    expect(employee.email).toBe("stevenly@me.com");

}); 

