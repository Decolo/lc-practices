function productExceptSelf(nums: number[]): number[] {
    const outputLefts = new Array(nums.length).fill(1);
    const outputRights = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
     
            outputLefts[i] = outputLefts[i - 1] * nums[i - 1];
    }

    for (let j = nums.length - 2; j > -1; j--) {
            outputRights[j] = outputRights[j + 1] * nums[j + 1];
        
    }

    for (let i = 0; i < nums.length - 1; i++) {
        outputLefts[i] = outputLefts[i] * outputRights[i];
    }

    return outputLefts;
};

