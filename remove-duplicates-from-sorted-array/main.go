package main

func removeDuplicates(nums []int) int {
    if (len(nums) < 2) {
        return len(nums)
    }

    i := 0
    max := nums[0]
    
    for j := 1; j < len(nums); j++ {
        if nums[j] > max {
            cover(nums, i + 1, j)
            i = i + 1

            max = nums[j]

        }
    }

    return i + 1
}

func cover (nums []int, i int, j int) {
    if i == j {
        return
    }
    
    nums[i] = nums[j]
}

