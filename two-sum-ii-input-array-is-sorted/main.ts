function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const temp = numbers[left] + numbers[right]
        if (temp === target) {
            return [left + 1, right + 1];
        } else if (temp > target) {
            right--
        } else {
            left ++
        }
    }

    return [left, right]
};