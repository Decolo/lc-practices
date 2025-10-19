package main

func findMaxAverage(nums []int, k int) float64 {
	sumTemp := getSum(nums, 0, k)
	maxSum := sumTemp

	for i := 1; i+k <= len(nums); i++ {
		sumTemp = sumTemp - nums[i-1] + nums[i+k-1]
		maxSum = max(maxSum, sumTemp)
	}

	return float64(maxSum) / float64(k)
}

func getSum(nums []int, start int, end int) int {
	sum := 0
	for i := start; i < end; i++ {
		sum += nums[i]
	}

	return sum
}
