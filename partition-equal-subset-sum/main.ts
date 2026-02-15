function canPartition(nums: number[]): boolean {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum % 2 !== 0) return false;

  const target = sum / 2;

  if (nums[0] === target) return true;
  
  const dp = new Array(nums.length + 1);

  for (let k = 0; k < dp.length; k++) {
    dp[k] = new Array(target + 1).fill(0);
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      if (j >= nums[i - 1]) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          nums[i - 1] + dp[i - 1][j - nums[i - 1]],
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }

        // console.log(dp)
      if (dp[i][j] === target) {
        return true;
      }
    }
  }

  return false;
}
// [1,5,11,5]

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));

// 11

// dp[i][j] = Math.max(dp[i - 1][j], nums[i] + dp[i - 1][j - nums[i]]

// 11
//    0,  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11  12

// 0  0  0  0  0   0   0
// 1  0  1  1  1  1  1  1  1  1  1  1   1    1

// 5  0  0  1  1  1  5  6  6  6  6   6   6    6

// 11 0  0  1  1  1  5  6  6  6  6   6   11  11

//     放 + dp[i - 1][当前背包体积 - 当前物品体积]
