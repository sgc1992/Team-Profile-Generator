const Manager = require('../lib/Manager');

describe("Manager", () => {
  describe("Initialisation", () => {
    it("Sets the expected properties", () => {
      // Arrange
      const manager = new Manager("name", "id", "email", "getofficenumber");
      const expectedManager = {
        name: "name",
        id: "id",
        email: "email",
        getofficenumber: "getofficenumber"
      };

      // Act

      // Assert
      expect(manager).toEqual(expectedManager);
    })
  });

  describe("Methods", () => {
    it("Methods return the expected values", () => {
      const manager = new Manager("name", "id", "email", "getofficenumber");

      expect(manager.getName()).toBe("name");
      expect(manager.getId()).toBe("id");
      expect(manager.getEmail()).toBe("email");
      expect(manager.getGetofficenumber()).toBe("getofficenumber");
      expect(manager.getRole()).toBe("Manager");
    })
  })
});