class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l3 = new ListNode(-1);
    let current = l3;
    let plus = 0
  
    while (l1 || l2) {
      const sum = (l1?.val || 0) + (l2?.val || 0) + plus;
      plus = Math.floor(sum / 10);
  
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
  
    if (plus) {
      current.next = new ListNode(1);
    }
  
    return l3.next;
  };