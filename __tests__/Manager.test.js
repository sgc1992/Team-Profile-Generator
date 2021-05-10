const Manager = require('../lib/Manager');

describe("Manager", () => {
  describe("Initialisation", () => {
    it("Sets the expected properties", () => {
      // Arrange
      const manager = new Manager("name", "id", "email", "github");
      const expectedManager = {
        name: "name",
        id: "id",
        email: "email",
        github: "github"
      };

      // Act

      // Assert
      expect(manager).toEqual(expectedManager);
    })
  });

  describe("Methods", () => {
    it("Methods return the expected values", () => {
      const manager = new Manager("name", "id", "email", "github");

      expect(manager.getName()).toBe("name");
      expect(manager.getId()).toBe("id");
      expect(manager.getEmail()).toBe("email");
      expect(manager.getGithub()).toBe("github");
      expect(manager.getRole()).toBe("Manager");
    })
  })
});