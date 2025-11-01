function tribonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;

    const map = {
        0: 0,
        1: 1,
        2: 1,
    }
    
    for (let i = 3; i <=n; i++) {
        const temp_sum = map[i - 3] + map[i - 2] + map[i - 1];

        map[i] = temp_sum;
    }

    return map[n];
};