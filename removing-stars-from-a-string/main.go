package main

import "strings"

// original version O(n)
func removeStars(s string) string {
	stack := []string{}

	for _, char := range s {
		if char != '*' {
			stack = append(stack, string(char))
		} else if len(stack) > 0 {
			stack = stack[:len(stack)-1]
		}
	}

	return strings.Join(stack, "")
}
