package main

import "fmt"

func twoSum(numbers []int, target int) []int {
	leftIndex := 0
	rightIndex := len(numbers) - 1

	for leftIndex <= rightIndex {
		temp := numbers[leftIndex] + numbers[rightIndex]

		if temp == target {
			return []int{leftIndex + 1, rightIndex + 1}
		} else if temp < target {
			leftIndex++
		} else {
			rightIndex--
		}
	}

	return []int{leftIndex, rightIndex}
}

func main() {
	// arr := []int{2, 7, 11, 15}

	// fmt.Printf("%+v\n", twoSum(arr, 9))

	// arr := []int{2, 3, 4}
	// fmt.Printf("%+v\n", twoSum(arr, 6))

	arr := []int{-1, 0}
	fmt.Printf("%+v\n", twoSum(arr, -1))
}
