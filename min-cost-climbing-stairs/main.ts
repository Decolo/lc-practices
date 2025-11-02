function minCostClimbingStairs(cost: number[]): number {
    const mini = new Array(cost.length + 1).fill(0);
  
    mini[0] = cost[0];
    mini[1] = cost[1];
  
    for (let i = 2; i < mini.length; i++) {
      mini[i] = Math.min(mini[i - 1], mini[i - 2]) + (cost[i] || 0);
    }
  
    return mini[mini.length - 1];
  };

console.log(minCostClimbingStairs([10, 15, 20]));