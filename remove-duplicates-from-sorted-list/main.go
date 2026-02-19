package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	slow := head
	fast := head.Next

	max := slow.Val

	for fast != nil {
		if fast.Val > max {
			// cover the next node of slow.Val with current fast.Val
			slow.Next.Val = fast.Val

			// update max
			max = fast.Val

			// move slow to next
			slow = slow.Next
		}

		// move fast to next
		fast = fast.Next
	}

	slow.Next = nil

	return head
}
