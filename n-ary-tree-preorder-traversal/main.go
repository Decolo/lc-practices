package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type Node struct {
	Val      int
	Children []*Node
}

func postorder(root *Node) []int {
	result := []int{}

	traverse(root, &result)

	return result
}

func traverse(node *Node, result *[]int) {
	if node == nil {
		return
	}

	for _, child := range node.Children {
		traverse(child, result)
	}

	*result = append(*result, node.Val)
}
