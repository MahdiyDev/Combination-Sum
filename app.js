/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  const result = [];

  function permute(arr = [], sum = 0, index = 0) {
    if (sum > target) return;
    if (sum === target) result.push(arr);

    for (let i = index; i < candidates.length; i++) {
      permute([...arr, candidates[i]], sum + candidates[i], i);
    }
  }
  permute();
  return result;
};

console.log(combinationSum([2, 3, 5], 8));
