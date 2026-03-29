 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }


function inorderTraversal(root: TreeNode): number[] {
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;
    const result: number[] = [];

    while (true) {

        while (current) {
            stack.push(current);

            current = current.left;
        }

        const top = stack.pop();

        if (top) {
            result.push(top.val)

            current = top.right;
        } else {
            return result;
        }

    }
}

