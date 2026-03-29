package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func postorderTraversal(root *TreeNode) []int {
	result := []int{}
	traverse(root, &result)

	return result
}

func traverse(node *TreeNode, result *[]int) {
	if node == nil {
		return
	}

	traverse(node.Left, result)

	traverse(node.Right, result)

	*result = append(*result, node.Val)
}
