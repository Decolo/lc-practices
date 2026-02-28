package main

func quickSort(nums []int) []int {
	if len(nums) < 2 {
		return nums
	}

	pivot := nums[len(nums)-1]

	left := []int{}
	right := []int{}

	for i := 0; i < len(nums)-1; i++ {
		if nums[i] < pivot {
			left = append(left, nums[i])
		} else {
			right = append(right, nums[i])
		}

	}

	result := append(quickSort(left), pivot)
	result = append(result, quickSort(right)...)

	return result
}

func threeSum(nums []int) [][]int {
	result := [][]int{}

	sortedNums := quickSort(nums)

	for i := 0; i < len(sortedNums)-2; i++ {
		current := sortedNums[i]

		if i > 0 && current == sortedNums[i-1] {
			continue
		}

		target := 0 - current

		_result := twoSum(sortedNums, target, i+1)

		if len(_result) > 0 {
			for _, item := range _result {
				item = append(item, current)

				result = append(result, item)
			}
		}
	}

	return result
}

func twoSum(nums []int, target int, start int) [][]int {
	left := start
	right := len(nums) - 1

	result := [][]int{}

	for left < right {
		temp := nums[left] + nums[right]

		if temp == target {
			result = append(result, []int{nums[left], nums[right]})

			left++
			right--

			for left < right && nums[left] == nums[left-1] {
				left++
			}

			for left < right && nums[right] == nums[right+1] {
				right--
			}
		} else if temp > target {
			right--
		} else {
			left++
		}
	}

	return result
}
