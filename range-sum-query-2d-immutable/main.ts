class NumMatrix {
  prefixMatrix: number[][];
  constructor(matrix: number[][]) {
    const prefixMatrix: number[][] = new Array(matrix.length);

    for (let i = 0; i < prefixMatrix.length; i++) {
      prefixMatrix[i] = new Array(matrix[0].length).fill(0);
    }

    prefixMatrix[0][0] = matrix[0][0];

    for (let j = 1; j < matrix[0].length; j++) {
      prefixMatrix[0][j] = prefixMatrix[0][j - 1] + matrix[0][j];
    }

    for (let i = 1; i < matrix.length; i++) {
      prefixMatrix[i][0] = prefixMatrix[i - 1][0] + matrix[i][0];
    }

    for (let i = 1; i < matrix.length; i++) {
      const row = matrix[i];

      for (let j = 1; j < row.length; j++) {
        prefixMatrix[i][j] =
          prefixMatrix[i][j - 1] +
          prefixMatrix[i - 1][j] -
          prefixMatrix[i - 1][j - 1] +
          matrix[i][j];
      }
    }

    this.prefixMatrix = prefixMatrix;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.prefixMatrix[row2][col2] -
      (this.prefixMatrix?.[row2]?.[col1 - 1] ?? 0) -
      (this.prefixMatrix?.[row1 - 1]?.[col2] ?? 0) +
      (this.prefixMatrix?.[row1 - 1]?.[col1 - 1] ?? 0)
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
