function findKthLargest(nums: number[], k: number): number {
    const pivot = nums[Math.floor(Math.random() * nums.length)];

    const larger = nums.filter(x => x > pivot);
    const equal = nums.filter(x => x === pivot);
    const smaller = nums.filter(x => x < pivot);

    if (k <= larger.length) {
        return findKthLargest(larger, k);
    } else if (k <= larger.length + equal.length) {
        return pivot;
    } else {
        return findKthLargest(smaller, k - larger.length - equal.length);
    }
}