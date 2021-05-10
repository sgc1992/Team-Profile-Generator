const Intern = require('../lib/Intern');

describe("Intern", () => {
  describe("Initialisation", () => {
    it("Sets the expected properties", () => {
      // Arrange
      const intern = new Intern("name", "id", "email", "github");
      const expectedIntern = {
        name: "name",
        id: "id",
        email: "email",
        github: "github"
      };

      // Act

      // Assert
      expect(intern).toEqual(expectedIntern);
    })
  });

  describe("Methods", () => {
    it("Methods return the expected values", () => {
      const intern = new Intern("name", "id", "email", "github");

      expect(intern.getName()).toBe("name");
      expect(intern.getId()).toBe("id");
      expect(intern.getEmail()).toBe("email");
      expect(intern.getGithub()).toBe("github");
      expect(intern.getRole()).toBe("Intern");
    })
  })
});