function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const midIndex = Math.floor((left + right) / 2);

        const x = Math.floor(midIndex / n);
        const y = midIndex % n;

        const pivot = matrix[x][y];

        if (pivot === target) {
            return true
        } else if (pivot > target) {
            right = midIndex - 1;
        } else {
            left = midIndex + 1;
        }
    }

    return false;
};