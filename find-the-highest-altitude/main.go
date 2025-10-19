package main

// original version O(n)
func largestAltitude(gain []int) int {
	maxPoint := 0
	sum := 0

	for i := 0; i < len(gain); i++ {
		sum += gain[i]
		maxPoint = max(maxPoint, sum)
	}

	return maxPoint
}
