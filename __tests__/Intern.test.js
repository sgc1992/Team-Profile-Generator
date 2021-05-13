const Intern = require('../lib/Intern');

describe("Intern", () => {
  describe("Initialisation", () => {
    it("Sets the expected properties", () => {
      // Arrange
      const intern = new Intern("name", "id", "email", "school");
      const expectedIntern = {
        name: "name",
        id: "id",
        email: "email",
        schoolName: "school"
      };

      // Act

      // Assert
      expect(intern).toEqual(expectedIntern);
    })
  });

  describe("Methods", () => {
    it("Methods return the expected values", () => {
      const intern = new Intern("name", "id", "email", "school");

      expect(intern.getName()).toBe("name");
      expect(intern.getId()).toBe("id");
      expect(intern.getEmail()).toBe("email");
      expect(intern.getSchool()).toBe("school");
      expect(intern.getRole()).toBe("Intern");
    })
  })
});