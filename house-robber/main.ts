function rob(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let i = 1;

    while (i < nums.length) {
       const temp = Math.max(nums[i] + (nums[i - 2] ?? 0), nums[i - 1])

       nums[i] = temp

       i++
    }

    return nums[nums.length - 1];
};

console.log(rob([2,1,1,2]))

