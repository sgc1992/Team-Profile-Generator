const Manager = require('../lib/Manager');

describe("Manager", () => {
  describe("Initialisation", () => {
    it("Sets the expected properties", () => {
      // Arrange
      const manager = new Manager("name", "id", "email", "officenumber");
      const expectedManager = {
        name: "name",
        id: "id",
        email: "email",
        officeNum: "officenumber"
      };

      // Act

      // Assert
      expect(manager).toEqual(expectedManager);
    })
  });

  describe("Methods", () => {
    it("Methods return the expected values", () => {
      const manager = new Manager("name", "id", "email", "officenumber");

      expect(manager.getName()).toBe("name");
      expect(manager.getId()).toBe("id");
      expect(manager.getEmail()).toBe("email");
      expect(manager.getOfficeNumber()).toBe("officenumber");
      expect(manager.getRole()).toBe("Manager");
    })
  })
});