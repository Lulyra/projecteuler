const { lastDivisor, sumAll } = require("../problems/problem_1.js");

describe("problem_1", function () {
  describe("lastDivisor", function () {
    it("Positiver integers bigger than 1", function () {
      expect(lastDivisor(10, 3)).toEqual(3);
      expect(lastDivisor(27, 5)).toEqual(5);
      expect(lastDivisor(125, 7)).toEqual(17);
    });
    it("numbers smaller than 1", function () {
      expect(lastDivisor(-20, -7)).toEqual(Error("Is not a correct Input"));
      expect(lastDivisor(10, 1)).toEqual(Error("Is not a correct Input"));
      expect(lastDivisor(15, -7)).toEqual(Error("Is not a correct Input"));
      expect(lastDivisor(-15, 3)).toEqual(Error("Is not a correct Input"));
    });
    it("N bigger than Target", function () {
      expect(lastDivisor(7, 15)).toEqual(Error("Is not a correct Input"));
      expect(lastDivisor(8, 30)).toEqual(Error("Is not a correct Input"));
    });
  });
});
