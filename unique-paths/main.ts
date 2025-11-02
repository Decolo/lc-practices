function uniquePaths(m: number, n: number): number {
  const grids = new Array(m);
  for (let i = 0; i < grids.length; i++) {
    grids[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < grids.length; i++) {
    grids[i][0] = 1;
  }

  for (let i = 0; i < grids[0].length; i++) {
    grids[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // grids[i][j] = grids[i - 1][j] + grids[i][j - 1];
      grids[i][j] = grids[i - 1][j - 1] + 2;
    }
  }

  return grids[m - 1][n - 1];
}
