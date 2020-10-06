/**
 * Find the last divisible by N, below the Target.
 * @param {number} target - Any integer bigger than 1
 * @param {number} n - Any integer bigger than 1
 */
function lastDivisor(target, n) {
  return Math.floor(target / n);
}
/**
 * Sum all number below a target value.
 * @param {number} target - Any integer bigger than 1
 */
function sumAll(target) {
  return 0.5 * target * (target + 1);
}

exports.lastDivisor = lastDivisor;
exports.sumAll = sumAll;
