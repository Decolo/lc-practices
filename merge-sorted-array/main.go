package main

import "fmt"

func orignal(nums1 []int, m int, nums2 []int, n int) {
	arr := make([]int, 0, m+n)

	nums1LeftIdx := 0
	nums2LeftIdx := 0

	for nums1LeftIdx < m && nums2LeftIdx < n {
		if nums1[nums1LeftIdx] > nums2[nums2LeftIdx] {
			arr = append(arr, nums2[nums2LeftIdx])
			nums2LeftIdx++
		} else {
			arr = append(arr, nums1[nums1LeftIdx])
			nums1LeftIdx++
		}
	}

	if nums1LeftIdx < m {
		for nums1LeftIdx < m {
			arr = append(arr, nums1[nums1LeftIdx])
			nums1LeftIdx++
		}
	}

	if nums2LeftIdx < n {
		for nums2LeftIdx < n {
			arr = append(arr, nums2[nums2LeftIdx])
			nums2LeftIdx++
		}
	}

	i := 0
	for i < m+n {
		nums1[i] = arr[i]
		i++
	}

	fmt.Printf("%v\n", arr) // [1 2 3 4 5]
	fmt.Printf("%+v\n", nums1)
}

func merge(nums1 []int, m int, nums2 []int, n int) {
	if n == 0 {
		fmt.Printf("%+v\n", nums1)
		return
	}

	rightNums1Index := m - 1
	rightNums2Index := n - 1

	k := m + n - 1

	for rightNums1Index > -1 && rightNums2Index > -1 {
		if nums2[rightNums2Index] > nums1[rightNums1Index] {
			nums1[k] = nums2[rightNums2Index]
			rightNums2Index--
		} else {
			nums1[k] = nums1[rightNums1Index]
			rightNums1Index--
		}

		k--
	}

	for rightNums2Index > -1 {

		nums1[k] = nums2[rightNums2Index]

		k--
		rightNums2Index--
	}

	fmt.Printf("%+v\n", nums1)
}

func main() {
	// num1 := []int{1, 5, 6, 0, 0, 0}
	// num2 := []int{2, 3, 4}
	// merge(num1, 3, num2, 3)

	// num1 := []int{0}
	// num2 := []int{1}
	// merge(num1, 0, num2, 1)

	// num1 := []int{2, 0}
	// num2 := []int{1}
	// merge(num1, 0, num2, 1)

	num1 := []int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
	num2 := []int{-50, -50, -48, -47, -44, -44, -37, -35, -35, -32, -32, -31, -29, -29, -28, -26, -24, -23, -23, -21, -20, -19, -17, -15, -14, -12, -12, -11, -10, -9, -8, -5, -2, -2, 1, 1, 3, 4, 4, 7, 7, 7, 9, 10, 11, 12, 14, 16, 17, 18, 21, 21, 24, 31, 33, 34, 35, 36, 41, 41, 46, 48, 48}
	merge(num1, 0, num2, 63)
}
