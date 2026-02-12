package main

func subarraySum(nums []int, k int) int {
	prefixSumMap := map[int]int{0: 1}

	total := 0

	cumu := 0

	for i := 0; i < len(nums); i++ {
		cumu += nums[i]

		total += prefixSumMap[cumu-k]

		prefixSumMap[cumu]++

	}

	return total
}
