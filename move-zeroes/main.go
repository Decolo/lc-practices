package main

func moveZeroes(nums []int) {
	slow := 0

	for fast := 0; fast < len(nums); fast++ { // fast 负责一直往前找

		if nums[fast] != 0 { // 【找】：找到了有效元素！
			temp := nums[slow]
			nums[slow] = nums[fast] // 【交换
			nums[fast] = temp
			slow++ // 抄完后，slow 准备下一个空位
		}

	}

}
