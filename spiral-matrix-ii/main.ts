function generateMatrix(n: number): number[][] {
    const matrix: number[][] = new Array(n);

    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
    }

    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1

    let current = 1
    while (current <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = current;
            current++;
        }

        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = current;
            current++;
        }

        right--;

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = current;
            current++;
        }


        bottom--;

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = current;
            current++;
        }

        
        left++;
    }

    return matrix;

};