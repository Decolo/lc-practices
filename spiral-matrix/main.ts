function spiralOrder(matrix: number[][]): number[] {
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1

    const result: number[] = [];
    let length = matrix[0].length * matrix.length;
    while (true) {
        for (let i = left; i <= right; i++) {
            result.push(matrix?.[top]?.[i]);
            length--;
        }

        if (length === 0) return result;

        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix?.[i]?.[right]);
            length--;
        }

        if (length === 0) return result;

        right--;

        for (let i = right; i >= left; i--) {
            result.push(matrix?.[bottom]?.[i]);
            length--;
        }

        if (length === 0) return result;

        bottom--;

        for (let i = bottom; i >= top; i--) {
            result.push(matrix?.[i]?.[left]);
            length--;
        }

        if (length === 0) return result;
        
        left++;
    }

    return result;
};