function findKthLargest(nums: number[], k: number): number {
    const pivot = nums[Math.floor(Math.random() * nums.length)];

    const larger = nums.filter(x => x > pivot);
    const equal = nums.filter(x => x === pivot);
    const smaller = nums.filter(x => x < pivot);

    if (k <= larger.length) {
        return findKthLargest(larger, k);
    } else if (k <= larger.length + equal.length) {
        return pivot;
    } else {
        return findKthLargest(smaller, k - larger.length - equal.length);
    }
}

// QuickSort: O(n log n)
// 
// Array: [3,2,1,5,6,4,7,8]
// 
// Level 0: Process ALL 8 elements
// [3,2,1,5,6,4,7,8] → partition around pivot
//          ↓
//     [3,2,1,4] [5,6,7,8]
//          ↓           ↓
//     recurse      recurse
//     BOTH!        BOTH!
// 
// Level 1: Process 4 + 4 = 8 elements total
// [3,2,1,4] → partition    [5,6,7,8] → partition
//     ↓                         ↓
// [2,1,3] [4]              [5,6] [7,8]
//   ↓                        ↓     ↓
// recurse                recurse recurse
// 
// Level 2: Process 3 + 2 + 2 + 1 = 8 elements total
// [2,1,3] → partition    [5,6] → partition    [7,8] → partition
//    ↓                      ↓                     ↓
// [1,2] [3]              [5] [6]              [7] [8]
// 
// Level 3: Process 2 elements
// [1,2] → done
// 
// Total levels: log n (height of tree)
// Work per level: n (process all elements across all branches)
// Total: n × log n = O(n log n)
// 
// ---
// QuickSelect: O(n)
// 
// Array: [3,2,1,5,6,4,7,8], find k=2
// 
// Level 0: Process 8 elements
// [3,2,1,5,6,4,7,8] → partition around pivot=5
//          ↓
//     [6,7,8] [5] [3,2,1,4]
//        ↓
//    recurse ONLY LEFT (larger elements)
//    IGNORE RIGHT!
// 
// Level 1: Process 3 elements (NOT 8!)
// [6,7,8] → partition around pivot=7
//    ↓
// [8] [7] [6]
//      ↑
//   found k=2!
// 
// Total work: 8 + 3 = 11 operations
// Formula: n + n/2 + n/4 + ... = 2n = O(n)
// 
// ---
// Side by Side
// 
// QuickSort:
// Level 0: ████████ (8 elements)
// Level 1: ████████ (8 elements across both branches)
// Level 2: ████████ (8 elements across all branches)
// Level 3: ██ (2 elements)
// 
// Total: 8 + 8 + 8 + 2 = 26 ≈ n log n
// 
// QuickSelect:
// Level 0: ████████ (8 elements)
// Level 1: ████ (4 elements, one side only)
// Level 2: ██ (2 elements, one side only)
// Level 3: █ (1 element)
// 
// Total: 8 + 4 + 2 + 1 = 15 ≈ 2n = O(n)
// 
// QuickSort = process BOTH sides at every level = n log n
// QuickSelect = process ONE side only = n