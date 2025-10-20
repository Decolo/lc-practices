package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteMiddle(head *ListNode) *ListNode {
	if head.Next == nil {
		return nil
	}

	count := 1
	current := head
	for current.Next != nil {
		count++
		current = current.Next
	}

	middle := count / 2

	count = 1
	current = head

	for current != nil {
		if count == middle {
			if current.Next.Next == nil {
				current.Next = nil
				return head
			} else {
				current.Next = current.Next.Next
				return head
			}
		} else {
			count++
			current = current.Next
		}
	}

	return head
}

func main() {
	// [1,3,4,7,1,2,6]
	// Create list: 1 -> 3 -> 4 -> 7 -> 1 -> 2 -> 6
	// head := &ListNode{Val: 1}
	// head.Next = &ListNode{Val: 3}
	// head.Next.Next = &ListNode{Val: 4}
	// head.Next.Next.Next = &ListNode{Val: 7}
	// head.Next.Next.Next.Next = &ListNode{Val: 1}
	// head.Next.Next.Next.Next.Next = &ListNode{Val: 2}
	// head.Next.Next.Next.Next.Next.Next = &ListNode{Val: 6}

	// [1,2,3,4]
	// head := &ListNode{Val: 1}
	// head.Next = &ListNode{Val: 2}
	// head.Next.Next = &ListNode{Val: 3}
	// head.Next.Next.Next = &ListNode{Val: 4}

	// [2,1]
	head := &ListNode{Val: 2}
	head.Next = &ListNode{Val: 1}

	result := deleteMiddle(head)

	// Print result
	current := result
	for current != nil {
		fmt.Print(current.Val)
		if current.Next != nil {
			fmt.Print(" -> ")
		}
		current = current.Next
	}
	fmt.Println()
}
