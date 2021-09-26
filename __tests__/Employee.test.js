const Employee = require("../lib/Employee");

test("creates a test employee", () => {
  const employee = new Employee("Syk", 5, "Email", 2);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.job).toBe("Employee");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.officeNum).toEqual(expect.any(Number));
});
