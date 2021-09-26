const Engineer = require("../lib/Engineer");

test('creates a test engineer', () => {
  const engineer = new Engineer('Syk', 5, 'Email', 'GitHub')

  expect(engineer.name).toEqual(expect.any(String))
  expect(engineer.job).toBe('Engineer')
  expect(engineer.id).toEqual(expect.any(Number))
  expect(engineer.email).toEqual(expect.any(String))
  expect(engineer.github).toEqual(expect.any(String))
})