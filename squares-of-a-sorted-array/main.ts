function sortedSquares(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;

    const result: number[] = [];

    while (right >= left) {
        const squareLeft = nums[left] * nums[left];
        const squareRight = nums[right] * nums[right];
        if (squareLeft > squareRight) {
            result.unshift(squareLeft);
            left++
        } else {
            result.unshift(squareRight)
            right--
        }
    }

    return result;
};

