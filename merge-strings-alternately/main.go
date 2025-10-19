package main

func mergeAlternately(word1 string, word2 string) string {
	len1 := len(word1)
	len2 := len(word2)

	len3 := ""

	minLen := len1
	if len2 < len1 {
		minLen = len2
	}
	// minLen := min(len1, len2)

	for i := 0; i < minLen; i++ {
		len3 += string(word1[i])
		len3 += string(word2[i])
	}

	for i := minLen; i < len1; i++ {
		len3 += string(word1[i])
	}

	for i := minLen; i < len2; i++ {
		len3 += string(word2[i])
	}

	return len3
}
