function findMaxLength(nums: number[]): number {
    if (nums.length === 1) return 0;

    const temp = new Array(nums.length + 1).fill(0);

    const map: Record<number, number[]> = {
        0: [0]
    };

    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        temp[i + 1] = temp[i] + (nums[i] === 0 ? -1 : 1);

        if (map[temp[i + 1]]) {
            map[temp[i + 1]].push(i + 1);

            const sub = map[temp[i + 1]];

            max = Math.max(max, sub[sub.length - 1] - sub[0])
        } else {
            map[temp[i + 1]] = [i + 1];
        }
    }

    return max;
}

console.log(findMaxLength([0,1,1,1,1,1,0,0,0]))








