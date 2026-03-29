class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseNodes(
  pre: ListNode | null,
  cur: ListNode | null,
): ListNode | null {
  if (!cur) {
    return pre;
  }

  const next = cur?.next;

  cur.next = pre;

  pre = cur;

  return reverseNodes(pre, next);
}

// recursive
function reverseList(head: ListNode | null): ListNode | null {
  return reverseNodes(null, head);
}


