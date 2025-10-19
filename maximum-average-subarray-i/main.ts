// orignal version  O(n^2)
// function findMaxAverage(nums: number[], k: number): number {
//     if (k === 0) return 0;
//     if (k === 1) return nums[0];
//     if (k >= nums.length) getAverage(nums);
    
//     let maxAverage = 0
//     for (let i = 0, j = i + k; j < nums.length; i++, j++) {
//        maxAverage = Math.max(maxAverage, getAverage(nums.slice(i, j)))
//     }

//     return maxAverage
// };

// function getAverage(nums): number {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }

//     return sum / nums.length
// }

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4))


// optimized version max: O(n) min: O(1) avg: O(n)
function findMaxAverage(nums: number[], k: number): number {
    if (k === 0) return 0;
    if (k >= nums.length) return getSum(nums, 0, nums.length) / nums.length;

    let sumTemp = getSum(nums, 0, k);
    let maxSum = sumTemp;

    for (let i = 1; (i + k) <= nums.length; i++) {
        sumTemp = sumTemp - nums[i - 1] + nums[i + k - 1]
        maxSum = Math.max(maxSum, sumTemp);
    }

    return maxSum / k;
};

function getSum(nums, start, end): number {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += nums[i];
    }

    return sum;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))