package main

import "fmt"

func merge(intervals [][]int) [][]int {
	sortedIntervals := quickSortIntervals(intervals)

	merged := [][]int{}
	temp := sortedIntervals[0]

	for i := 1; i < len(sortedIntervals); i++ {
		current := sortedIntervals[i]

		if temp[1] >= current[0] {
			temp[1] = max(temp[1], current[1])
		} else {
			merged = append(merged, temp)
			temp = current
		}
	}

	if temp != nil {
		merged = append(merged, temp)
	}

	return merged
}

func quickSortIntervals(intervals [][]int) [][]int {
	if len(intervals) < 2 {
		return intervals
	}

	left := [][]int{}
	right := [][]int{}

	pivot := intervals[len(intervals)-1][0]

	for i := 0; i < len(intervals)-1; i++ {
		current := intervals[i][0]

		if current < pivot {
			left = append(left, intervals[i])
		} else {
			right = append(right, intervals[i])
		}
	}

	result := append(quickSortIntervals(left), intervals[len(intervals)-1])
	result = append(result, quickSortIntervals(right)...)

	return result
}

func main() {

	intervals := [][]int{{2, 6}, {1, 3}, {8, 10}, {15, 18}}

	result := merge(intervals)

	fmt.Println(result)
}
