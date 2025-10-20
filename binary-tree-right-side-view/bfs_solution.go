package main

// BFS (Level-order traversal) solution
// Key idea: Process tree level by level, take the LAST node of each level
func rightSideViewBFS(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	result := []int{}
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		// Get current level size
		levelSize := len(queue)

		// Process all nodes at current level
		for i := 0; i < levelSize; i++ {
			// Dequeue (FIFO - remove from front)
			node := queue[0]
			queue = queue[1:]

			// If this is the last node in this level, add to result
			if i == levelSize-1 {
				result = append(result, node.Val)
			}

			// Enqueue children (left first, then right)
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
	}

	return result
}
