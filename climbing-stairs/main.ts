function climbStairs(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let i = 3

    let stars = 0

    let a = 1, b = 2

    while (i <= n) {
        stars = a + b

        a = b
        b = stars

        i++
    }

    return stars
};

console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))


