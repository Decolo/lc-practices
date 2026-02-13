function coinChange(coins: number[], amount: number): number {
    if (amount <= 0) return 0;

    const dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i ++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};

console.log(coinChange([1, 2, 5], 11))

console.log(coinChange([2], 3))

console.log(coinChange([1], 0))