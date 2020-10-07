/**
 * Find the last divisible by N, below the Target.
 * @param {number} target - Any integer bigger than 0
 * @param {number} n - Any integer bigger than 0
 */
function lastDivisor(target, n) {
  const targetIsBiggerThanN = target >= n;
  const isNumber = !(isNaN(target) && isNaN(n));
  const biggerThanOne = target > 0 && n > 0;
  const conditions = isNumber && biggerThanOne && targetIsBiggerThanN;
  return conditions ? Math.floor(target / n) : Error("Is not a correct Input");
}
/**
 * Sum all number below a target value.
 * @param {number} target - Any integer bigger than 1
 */
function sumAll(target) {
  const condition = !isNaN(target) && target > 0;
  return condition
    ? 0.5 * target * (target + 1)
    : Error("Is not a correct Input");
}
/**
 * Sum all Divisible number by n that is bellow Target.
 * @param {number} target - Any integer bigger than 1
 * @param {number} n - Any integer bigger than 1
 */
function sumAllDivisibleByAndBelow(target, n) {
  const divisor = lastDivisor(target, n);
  console.log(divisor);
  return divisor && n * sumAll(divisor);
}

/**
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
function solution(target) {
  const divisorBy3 = sumAllDivisibleByAndBelow(target, 3);
  const divisorBy5 = sumAllDivisibleByAndBelow(target, 5);
  const divisorBy15 = target >= 15 ? sumAllDivisibleByAndBelow(target, 15) : 0;
  return divisorBy3 + divisorBy5 - divisorBy15;
}

exports.lastDivisor = lastDivisor;
exports.sumAll = sumAll;
exports.sumAllDivisibleByAndBelow = sumAllDivisibleByAndBelow;
exports.solution = solution;
