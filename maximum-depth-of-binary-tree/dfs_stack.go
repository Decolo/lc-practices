package main

// Stack stores pairs of (node, depth)
type StackItem struct {
	node  *TreeNode
	depth int
}

// DFS with stack (iterative approach)
func maxDepthDFSStack(root *TreeNode) int {
	if root == nil {
		return 0
	}

	stack := []StackItem{{root, 1}}
	maxDepth := 0

	for len(stack) > 0 {
		// Pop from stack (LIFO - Last In First Out)
		item := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		node := item.node
		depth := item.depth

		// Update max depth
		if depth > maxDepth {
			maxDepth = depth
		}

		// Push children to stack
		if node.Left != nil {
			stack = append(stack, StackItem{node.Left, depth + 1})
		}
		if node.Right != nil {
			stack = append(stack, StackItem{node.Right, depth + 1})
		}
	}

	return maxDepth
}
