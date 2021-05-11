const Employee = require('../lib/Employee');

describe("Employee", () => {
  describe("Initialisation", () => {
    it("Sets the expected properties", () => {
      // Arrange
      const employee = new Employee("name", "id", "email");
      const expectedEmployee = {
        name: "name",
        id: "id",
        email: "email",
      };

      // Act

      // Assert
      expect(employee).toEqual(expectedEmployee);
    })
  });

  describe("Methods", () => {
    it("Methods return the expected values", () => {
      const employee = new Employee("name", "id", "email");

      expect(employee.getName()).toBe("name");
      expect(employee.getId()).toBe("id");
      expect(employee.getEmail()).toBe("email");
      expect(employee.getRole()).toBe("Employee");
    })
  })
});