function preorderTraversal(root: TreeNode): number[] {
    const stack: TreeNode[] = [root];
    const result: number[] = [];

    while (stack.length) {
        const top = stack.pop();
        
        if (top) {
            result.push(top?.val);
            
            top?.right && stack.push(top?.right);
            top?.left && stack.push(top?.left);
        }
    }

    return result;
}
