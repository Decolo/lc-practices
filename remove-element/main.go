package main

func removeElement(nums []int, val int) int {
	if len(nums) == 0 {
		return 0
	}

	left := 0
	right := len(nums) - 1

	for right > left {
		if nums[left] == val && nums[right] != val {
			swap(nums, left, right)
			left++
			right--
		} else {
			if nums[right] == val {
				right--
			}
			if nums[left] != val {
				left++
			}
		}
	}

	min := min(right, left)

	if nums[min] == val {
		min--
	}
	return min + 1
}

func swap(nums []int, i int, j int) {

	temp := nums[i]
	nums[i] = nums[j]
	nums[j] = temp
}
