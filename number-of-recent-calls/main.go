package main

type RecentCounter struct {
	request []int
	start   int
}

func Constructor() RecentCounter {
	return RecentCounter{
		request: []int{},
		start:   0,
	}
}

// original version O(n)
func (this *RecentCounter) Ping(t int) int {
	this.request = append(this.request, t)

	minLimit := t - 3000

	for len(this.request) > 0 && this.request[this.start] < minLimit {
		this.start++
	}

	return len(this.request) - this.start
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Ping(t);
 */
