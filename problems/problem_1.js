/**
 * Find the last divisible by N, below the Target.
 * @param {number} target - Any integer bigger than 1
 * @param {number} n - Any integer bigger than 1
 */
function lastDivisor(target, n) {
  const targetIsBiggerThanN = target > n;
  const isNumber = !(isNaN(target) && isNaN(n));
  const biggerThanOne = target > 1 && n > 1;
  const conditions = isNumber && biggerThanOne && targetIsBiggerThanN;
  return conditions ? Math.floor(target / n) : Error("Is not a correct Input");
}
/**
 * Sum all number below a target value.
 * @param {number} target - Any integer bigger than 1
 */
function sumAll(target) {
  return 0.5 * target * (target + 1);
}
/**
 * Sum all Divisible number by n that is bellow Target.
 * @param {number} target - Any integer bigger than 1
 * @param {number} n - Any integer bigger than 1
 */
function sumAllDivisibleByAndBelow() {}

exports.lastDivisor = lastDivisor;
exports.sumAll = sumAll;
