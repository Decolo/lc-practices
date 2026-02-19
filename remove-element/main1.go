package main

func removeElement2(nums []int, val int) int {
	slow := 0 // 负责抄的空位

	for fast := 0; fast < len(nums); fast++ { // fast 负责一直往前找

		if nums[fast] != val { // 【找】：找到了有效元素！
			nums[slow] = nums[fast] // 【抄】：抄进 slow 的位置
			slow++                  // 抄完后，slow 准备下一个空位
		}

	}

	return slow
}
