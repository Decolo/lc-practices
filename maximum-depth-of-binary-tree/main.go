package main

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	return 1 + maxDepthSub(root)
}

func maxDepthSub(root *TreeNode) int {
	if root == nil {
		return 0
	}

	depth := 0

	if root.Left != nil || root.Right != nil {
		depth++
	} else {
		return depth
	}

	return depth + int(math.Max(float64(maxDepthSub(root.Left)), float64(maxDepthSub(root.Right))))
}

func main() {
	// [3,9,20,null,null,15,7]
	//       3
	//      / \
	//     9  20
	//       /  \
	//      15   7
	// root := &TreeNode{Val: 3}
	// root.Left = &TreeNode{Val: 9}
	// root.Right = &TreeNode{Val: 20}
	// root.Right.Left = &TreeNode{Val: 15}
	// root.Right.Right = &TreeNode{Val: 7}

	// [1,null,2]
	root := &TreeNode{Val: 1}
	root.Right = &TreeNode{Val: 2}

	result := maxDepth(root)
	fmt.Println("Max depth:", result)
}
