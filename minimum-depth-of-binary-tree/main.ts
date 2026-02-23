class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let min = Infinity;
  const queue: [TreeNode, number][] = [[root, 1]];

  while (queue.length) {
    const temp = queue.shift();

    if (!temp) {
      return min;
    }

    const currentNode = temp?.[0];
    const currentDepth = temp?.[1];

    if (currentNode?.left === null && currentNode?.right === null) {
      min = Math.min(min, currentDepth);
      return min;
    }

    if (currentNode?.left) {
      queue.push([currentNode.left, currentDepth + 1]);
    }

    if (currentNode?.right) {
      queue.push([currentNode.right, currentDepth + 1]);
    }
  }

  return min;
}

function minDepth2(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let depth = 1;
  const queue: TreeNode[] = [root];

  while (queue.length) {

    let stackLength = queue.length;

    while (stackLength > 0) {
      const currentNode = queue.shift();

      if (currentNode?.left === null && currentNode?.right === null) {
        return depth;
      }

      if (currentNode?.left) {
        queue.push(currentNode.left);
      }

      if (currentNode?.right) {
        queue.push(currentNode.right);
      }

      stackLength--;
    }

    depth++;
  }

  return depth;
}
