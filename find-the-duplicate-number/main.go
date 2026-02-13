package main

type Node struct {
	Val  int
	Next *Node // Pointer to the next Node
}

func findDuplicate(nums []int) int {
	tempArr := make([]*Node, len(nums))

	tempArr[0] = &Node{Val: nums[0], Next: nil}
	head := tempArr[0]

	for i := 1; i < len(nums); i++ {
		tempArr[i] = &Node{Val: nums[i], Next: nil}
	}

	for i := 0; i < len(nums); i++ {
		tempArr[i].Next = tempArr[tempArr[i].Val]
	}

	slow := head
	fast := head

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if slow == fast {
			break
		}
	}

	if fast == nil || fast.Next == nil {
		return -1
	}

	return slow.Val

	fast = head

	for fast != slow {
		fast = fast.Next
		slow = slow.Next
	}

	return slow.Val
}

// func printLinkedList(head *Node) {
// 	for head != nil {
// 		println(head.Val)
// 		head = head.Next
// 	}
// }

func main() {
	nums := []int{1, 3, 4, 2, 2}

	// 1, 3, 4, 2, 2

	1 -> 3 -> 2 -> 4 -> 2 -- > 4
	println(findDuplicate(nums))
}
