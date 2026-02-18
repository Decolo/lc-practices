/**
 Do not return anything, modify matrix in-place instead.
 */
 function rotate(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i < j) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        reverseArray(matrix[i])
    }
};

function reverseArray(array: number[]) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp

        left++
        right--
    }
}