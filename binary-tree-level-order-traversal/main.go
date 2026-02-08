package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}

	result := [][]int{{root.Val}}
	queue := []TreeNode{*root}

	for len(queue) > 0 {
		queueSize := len(queue)
		layerResult := []int{}
		newQueue := []TreeNode{}

		for i := 0; i < queueSize; i++ {

			if queue[i].Left != nil {
				layerResult = append(layerResult, queue[i].Left.Val)
				newQueue = append(newQueue, *queue[i].Left)
			}

			if queue[i].Right != nil {
				layerResult = append(layerResult, queue[i].Right.Val)
				newQueue = append(newQueue, *queue[i].Right)
			}

		}

		if len(layerResult) > 0 {
			result = append(result, layerResult)
		}

		queue = newQueue
	}

	return result
}
