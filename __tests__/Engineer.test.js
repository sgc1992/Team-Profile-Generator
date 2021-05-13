const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  describe("Initialisation", () => {
    it("Sets the expected properties", () => {
      // Arrange
      const engineer = new Engineer("name", "id", "email", "github");
      const expectedEngineer = {
        name: "name",
        id: "id",
        email: "email",
        gitHub: "github"
      };

      // Act

      // Assert
      expect(engineer).toEqual(expectedEngineer);
    })
  });

  describe("Methods", () => {
    it("Methods return the expected values", () => {
      const engineer = new Engineer("name", "id", "email", "github");

      expect(engineer.getName()).toBe("name");
      expect(engineer.getId()).toBe("id");
      expect(engineer.getEmail()).toBe("email");
      expect(engineer.getGitHub()).toBe("github");
      expect(engineer.getRole()).toBe("Engineer");
    })
  })
});
