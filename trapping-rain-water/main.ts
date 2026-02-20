function trap(height: number[]): number {
    const left_max = new Array(height.length).fill(0);
    const right_max = new Array(height.length).fill(0);

    for (let i = 0; i < height.length; i++) {
        left_max[i] = Math.max(left_max[i - 1] ?? 0, height[i]);
    }

    for (let i = height.length - 1; i >= 0; i--) {
        right_max[i] = Math.max(right_max[i + 1] ?? 0, height[i]);
    }

    let result: number = 0;

    for (let i = 1; i < height.length - 1; i++) {
        result += Math.min(left_max[i], right_max[i]) - height[i]
    }

    return result;
};

function trap2(height: number[]): number {
    let left_max = height[0];
    let right_max = height[height.length - 1];
    let left = 0;
    let right = height.length - 1;

    let result: number = 0;

    while (right > left) {
        left_max = Math.max(left_max, height[left]);
        right_max = Math.max(right_max, height[right]);

        if (left_max < right_max) {
            result += left_max - height[left]
            left++
        } else {
            result += right_max - height[right]
            right--
        }
    }

    return result;
}
