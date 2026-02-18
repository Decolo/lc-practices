class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null;
  if (head.next == null || k < 1) return head;

  let length = 1;
  let end = head;

  while (end.next) {
    end = end.next;
    length++;
  }

  let breaksteps = length - (k % length);

  if (breaksteps === length) return head;

  let newEnd = head;

  while (breaksteps > 1 && newEnd.next) {
    newEnd = newEnd.next;
    breaksteps--;
  }

  const newHead = newEnd.next;
  newEnd.next = null;

  end.next = head;

  return newHead;
}
