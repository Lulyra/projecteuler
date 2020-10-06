const { lastDivisor, sumAll } = require("../problems/problem_1.js");

describe("find the sum of all the multiples of 3 or 5 below 1000.", function () {
  it("Find the last divisible by n, the below target.", function () {
    expect(lastDivisor(10, 3)).toBe(3);
    expect(lastDivisor(25, 4)).toBe(6);
    expect(lastDivisor(125, 7)).toBe(17);
  });

  it("Sum all number below a target value.", function () {
    expect(sumAll(3)).toBe(6);
    expect(sumAll(10)).toBe(55);
    expect(sumAll(7)).toBe(28);
  });
});
