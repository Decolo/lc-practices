function jump(nums: number[]): number {
    if (nums.length <= 1) return 0;

    let step = 0;
    let currentLimit = 0; 
    let nextMax = 0;      

    // 只需要遍历到 nums.length - 1
    for (let i = 0; i < nums.length - 1; i++) {
        
        // 1. 探测：更新下一跳最远能去哪
        nextMax = Math.max(nextMax, i + nums[i]);

        // 【你的优化点】：提前结束
        // 如果发现下一跳的潜力已经足以覆盖终点，直接返回结果！
        // 此时我们处于第 step 步的范围内，再跳一步就能到，所以是 step + 1
        if (nextMax >= nums.length - 1) {
            return step + 1;
        }

        // 2. 撞线：走到当前步数的尽头了
        if (i == currentLimit) {
            step++;             
            currentLimit = nextMax; 
        }
    }

    return step;
}