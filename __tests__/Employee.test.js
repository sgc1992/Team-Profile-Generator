const Employee = require('../lib/Employee');

describe("Employee", () => {
  describe("Initialisation", () => {
    it("Sets the expected properties", () => {
      // Arrange
      const employee = new Employee("name", "id", "email", "github");
      const expectedEmployee = {
        name: "name",
        id: "id",
        email: "email",
        github: "github"
      };

      // Act

      // Assert
      expect(employee).toEqual(expectedEmployee);
    })
  });

  describe("Methods", () => {
    it("Methods return the expected values", () => {
      const employee = new Employee("name", "id", "email", "github");

      expect(employee.getName()).toBe("name");
      expect(employee.getId()).toBe("id");
      expect(employee.getEmail()).toBe("email");
      expect(employee.getGithub()).toBe("github");
      expect(employee.getRole()).toBe("Employee");
    })
  })
});