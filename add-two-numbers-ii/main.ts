/**
 * Definition for singly-linked list.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbersii(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1: number[] = [];
    const stack2: number[] = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    const l3 = new ListNode(-1);

    let plus = 0;

    let current: null | ListNode  = null;

    while (stack1.length || stack2.length) {
        const current1 = stack1.length ? stack1.pop() : 0;
        const current2 = stack2.length ? stack2.pop() : 0;

        const sum = (current1 || 0) + (current2 || 0) + plus;

        const newVal = sum % 10;

        const newNode = new ListNode(newVal);

        plus = Math.floor(sum / 10);

        l3.next = newNode;

        if (current) {
            newNode.next = current;   
        }

        current = newNode;  
    }

    if (plus) {
        l3.next = new ListNode(1);
        l3.next.next = current;
    } 

    return l3.next;
};