package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}

	pre := (*ListNode)(nil)
	next := (*ListNode)(nil)
	cur := (*ListNode)(head)

	for cur.Next != nil {
		next = cur.Next
		cur.Next = pre
		pre = cur
		cur = next
	}

	return cur
}
