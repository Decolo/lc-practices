/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// function zigzagLevelOrder(root: TreeNode | null): number[][] {
//     if (!root) return [];
    
//     let queue: TreeNode[] = [root];

//     const result:number[][]  = []

//     while (queue.length) {
//         const end = queue.length;

//         const levels: number[] = [];

//         let k = 0;

//         while (k < end) {
//             k++

//             const current = queue.shift();

//             if (!current) {
//                 continue
//             }

//             levels.push(current.val);

//             if (current.left) {
//                 queue.push(current.left)
//             }

//             if (current.right) {
//                 queue.push(current.right)
//             }
//         }

//         result.push(levels);
//     }

//     for (let i = 0; i < result.length; i++) {
//         const isOdd = i % 2 === 1;

//         if (isOdd) {
//             result[i] = result[i].reverse();
//         }
//     }

//     return result;
// }


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    let queue: TreeNode[] = [root];

    const result:number[][]  = [];

    let depth = 1;

    while (queue.length) {
        const end = queue.length;

        const levels: number[] = [];

        const newQueue: TreeNode[] = [];

        let k = 0;

        while (k < end) {
            k++
            
            const isEven = depth % 2 === 0;

            const current = queue.shift();

            if (!current) {
                continue
            }

            if (current.left) {
                queue.push(current.left)
            }

            if (current.right) {
                queue.push(current.right)
            }

            if (isEven) {
                levels.unshift(current.val);
            } else {
                levels.push(current.val);
            }
            
        }

        result.push(levels);
        depth++;
    }

    return result;
}


