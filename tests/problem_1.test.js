const {
  lastDivisor,
  sumAll,
  sumAllDivisibleByAndBelow,
} = require("../problems/problem_1.js");

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
  describe("sumAll", function () {
    it("number bigger than 1,", function () {
      expect(sumAll(3)).toEqual(6);
      expect(sumAll(10)).toEqual(55);
    });
    it("number smaller or equal than 1", function () {
      expect(sumAll(1)).toEqual(Error("Is not a correct Input"));
      expect(sumAll(0)).toEqual(Error("Is not a correct Input"));
      expect(sumAll(-10)).toEqual(Error("Is not a correct Input"));
    });
  });
  describe("sumAllDivisibleByAndBelow", function () {
    it("target and n bigger than 1", function () {
      expect(sumAllDivisibleByAndBelow(10, 3)).toEqual(18);
      expect(sumAllDivisibleByAndBelow(21, 5)).toEqual(50);
    });
    it("n less or equal than 1", function () {
      expect(sumAllDivisibleByAndBelow(10, -1)).toEqual(NaN);
      expect(sumAllDivisibleByAndBelow(10, -7)).toEqual(NaN);
    });
    it("n bigger than target", function () {
      expect(sumAllDivisibleByAndBelow(5, 15)).toEqual(NaN);
      expect(sumAllDivisibleByAndBelow(-5, 3)).toEqual(NaN);
    });
    it("target is less or equal 1", function () {
      expect(sumAllDivisibleByAndBelow(1, 0)).toEqual(NaN);
      expect(sumAllDivisibleByAndBelow(-5, -15)).toEqual(NaN);
    });
  });
});
