package main

import "fmt"

func findDifference(nums1 []int, nums2 []int) [][]int {
	map1 := make(map[int]bool)
	map2 := make(map[int]bool)

	// build maps
	for _, item := range nums1 {
		map1[item] = true
	}

	for _, item := range nums2 {
		map2[item] = true
	}

	result := [][]int{{}, {}}

	for item := range map1 {

		if map2[item] != true {
			result[0] = append(result[0], item)
		}
	}

	for item := range map2 {
		if map1[item] != true {
			result[1] = append(result[1], item)
		}
	}

	return result
}

func main() {
	nums1 := []int{1, 2, 3, 3}
	nums2 := []int{1, 1, 2, 2}
	fmt.Println(findDifference(nums1, nums2))
}
