const Intern = require("../lib/Intern");

test("Creates a test intern", () => {
  const intern = new Intern("Syk", 5, "Email", "School");

  expect(intern.job).toBe("Intern");
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
