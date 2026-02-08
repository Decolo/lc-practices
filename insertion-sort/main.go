package main

import "fmt"

func insertionSort(arr []int) []int {
	if len(arr) < 2 {
		return arr
	}

	for i := 1; i < len(arr); i++ {
		temp := i
		for j := i - 1; j > -1; j-- {
			if arr[j] > arr[temp] {
				swap(arr, temp, j)
				temp = j
			}
		}
	}

	return arr
}

func swap(arr []int, i int, j int) {
	temp := arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

func main() {
	fmt.Println(insertionSort([]int{5, 3, 4, 1, 2}))
}
