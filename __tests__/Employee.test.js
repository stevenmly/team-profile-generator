const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {

    const employee = new Employee("Steven", "123456", "stevenly@me.com");

    expect(employee.name).toBe("Steven");
    expect(employee.id).toBe("123456");
    expect(employee.email).toBe("stevenly@me.com");

}); 

test('gets employee name', () => {
    const employee = new Employee("Steven", "123456", "stevenly@me.com");

    expect(employee.getName()).toBe("Steven")
})

test('gets employee id', () => {
    const employee = new Employee("Steven", "123456", "stevenly@me.com");

    expect(employee.getId()).toBe("123456")
})

test('gets employee email', () => {
    const employee = new Employee("Steven", "123456", "stevenly@me.com");

    expect(employee.getEmail()).toBe("stevenly@me.com")
})

test('gets employee role', () => {
    const employee = new Employee("Steven", "123456", "stevenly@me.com");

    expect(employee.getRole()).toBe("Employee")
}) 

