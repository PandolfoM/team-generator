const Manager = require("../lib/Manager");

test("Creates a test manager", () => {
  const manager = new Manager("Syk", 5, "Email", 2);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.job).toBe("Manager");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNum).toEqual(expect.any(Number));
});
