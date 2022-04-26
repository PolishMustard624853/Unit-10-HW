const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should set the value of name, id and email when I set them.', () => {
            // Arrange
            let name = 'Connor';
            let id = 1;
            let email = 'OHYEAH@gmail.com';
            // Act
            let employee = new Employee(name, id, email)
            // Assert
            expect(employee.name).toEqual('Connor')
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual('OHYEAH@gmail.com')
        });
    });
    describe('getName', () => {
        it('should ', () => {
            
        });
    });
    describe('getId', () => {
        it('should ', () => {
            
        });
    });
    describe('getEmail', () => {
        it('should ', () => {
            
        });
    });
    describe('getRole', () => {
        it('should return Employee when getRole is called', () => {
            let name = 'Connor';
            let id = 1;
            let email = 'OHYEAH@gmail.com';
            let employee = new Employee(name, id, email);

            let role = employee.getRole();

            expect(role).toEqual(Employee);
        });
    });
});

