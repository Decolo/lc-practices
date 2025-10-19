package main

import "fmt"

// orignal version O(n + m)
// func findDifference(nums1 []int, nums2 []int) [][]int {
// 	len1 := len(nums1)
// 	len2 := len(nums2)

// 	minLen := min(len1, len2)

// 	map1 := make(map[int]int)
// 	map2 := make(map[int]int)

// 	result := [][]int{{}, {}}

// 	for i := 0; i < minLen; i++ {
// 		map1[nums1[i]] = 0
// 		map2[nums2[i]] = 0
// 	}

// 	for i := minLen; i < len1; i++ {
// 		map1[nums1[i]] = 0
// 	}

// 	for i := minLen; i < len2; i++ {
// 		map2[nums2[i]] = 0
// 	}

// 	for i := 0; i < minLen; i++ {
// 		item1 := nums1[i]
// 		item2 := nums2[i]

// 		_, item1existsInMap2 := map2[item1]
// 		item1existsInMap1, _ := map1[item1]

// 		_, item2existsInMap1 := map1[item2]
// 		item2existsInMap2, _ := map2[item2]

// 		if !item1existsInMap2 && item1existsInMap1 == 0 {
// 			result[0] = append(result[0], item1)
// 			map1[item1] = 1
// 		}

// 		if !item2existsInMap1 && item2existsInMap2 == 0 {
// 			result[1] = append(result[1], item2)
// 			map2[item2] = 1
// 		}
// 	}

// 	for i := minLen; i < len1; i++ {
// 		item1 := nums1[i]
// 		_, item1existsInMap2 := map2[item1]
// 		item1existsInMap1, _ := map1[item1]

// 		if !item1existsInMap2 && item1existsInMap1 == 0 {
// 			map1[item1] = 1
// 			result[0] = append(result[0], item1)
// 		}
// 	}

// 	for i := minLen; i < len2; i++ {
// 		item2 := nums2[i]

// 		_, item2existsInMap1 := map1[item2]
// 		item2existsInMap2, _ := map2[item2]

// 		if !item2existsInMap1 && item2existsInMap2 == 0 {
// 			map2[item2] = 1
// 			result[1] = append(result[1], item2)
// 		}
// 	}

// 	return result
// }

//nums1 =[1,2,3,3]
//nums2 =[1,1,2,2]
// output: [[3],[]]

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
