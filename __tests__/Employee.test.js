const Employee = require('../lib/Employee');

test("Can instantiate employee instance?", ()=>{
  const e=new Employee();
  expect(typeof(e)).toBe("object")
});