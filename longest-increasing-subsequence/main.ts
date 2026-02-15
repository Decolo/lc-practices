function lengthOfLIS(nums: number[]): number {
    let maxLength = 1;
    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = Math.max(dp[i], nums[j] < nums[i] ? (dp[j] + 1) : dp[i])

            maxLength = Math.max(maxLength, dp[i])
        }
    }

    return maxLength;
};

console.log(lengthOfLIS([4,10,4,3,8,9]))

