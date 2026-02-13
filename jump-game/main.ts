function canJump(nums: number[]): boolean {
  if (nums.length < 2) return true;

  let maxReach = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    
    const temp = Math.max(nums[i] + i, maxReach);
    
    if (temp <= i) {
        return false;
    }

    maxReach = temp
  }

  return maxReach >= nums.length - 1;
}
