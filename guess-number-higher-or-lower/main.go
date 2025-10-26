package main

/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * func guess(num int) int;
 */

// func guess(num int) int {
// 	return 0
// }

func guessNumber(n int) int {
	left := 1
	right := n
	mid := 0

	if guess(n) == 0 {
		return n
	}
	if guess(1) == 0 {
		return 1
	}

	for left < right {
		mid = (left + right) / 2

		result := guess(mid)

		if result == -1 {
			right = mid
		} else if result == 1 {
			left = mid
		} else {
			return mid
		}
	}
	return left
}
