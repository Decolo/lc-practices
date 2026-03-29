function preorderTraversal(root: TreeNode): number[] {
  const stack: [TreeNode, 0 | 1][] = [[root, 0]];
  const result: number[] = [];
  let current: TreeNode | null = root;

  // [[root, 0], [right, 0], [left, 0], [left-right, 1]];

  while (true) {
    current = stack[stack.length - 1][0];

    while (current) {
        const state = stack[stack.length - 1][1]

        if (state === 1) {
            break;
        }

      if (current?.right) {
        stack.push([current.right, 0]);
      }

      if (current?.left) {
        stack.push([current.left, 0]);
      }

      current = current?.left;
    }

    stack[stack.length - 1][1] = 1;
  }
}



