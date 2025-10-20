package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// O(n)
func rightSideView(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	queue := []*TreeNode{root}
	result := []int{root.Val}

	for len(queue) > 0 {
		levelSize := len(queue)

		for i := 0; i < levelSize; i++ {
			node := queue[0]
			queue = queue[1:]

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		if len(queue) > 0 {
			result = append(result, queue[len(queue)-1].Val)
		}
	}

	return result
}

func main() {
	// [1,2,3,null,5,null,4]
	//       1
	//      / \
	//     2   3
	//      \   \
	//       5   4
	root := &TreeNode{Val: 1}
	root.Left = &TreeNode{Val: 2}
	root.Right = &TreeNode{Val: 3}
	root.Left.Right = &TreeNode{Val: 5}
	root.Right.Right = &TreeNode{Val: 4}
	result := rightSideView(root)
	fmt.Println(result)

	// [1,2,3,4,null,null,null,5]
	//       1
	//      / \
	//     2   3
	//    /
	//   4
	//  /
	// 5
	// root := &TreeNode{Val: 1}
	// root.Left = &TreeNode{Val: 2}
	// root.Right = &TreeNode{Val: 3}
	// root.Left.Left = &TreeNode{Val: 4}
	// root.Left.Left.Left = &TreeNode{Val: 5}

	// result := rightSideView(root)
	// fmt.Println(result)
}
