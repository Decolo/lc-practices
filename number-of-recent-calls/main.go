package main

type RecentCounter struct {
	request []int
}

func Constructor() RecentCounter {
	return RecentCounter{
		request: []int{},
	}
}

// original version O(n)
func (this *RecentCounter) Ping(t int) int {
	this.request = append(this.request, t)

	minLimit := t - 3000

	for len(this.request) > 0 && this.request[0] < minLimit {
		this.request = this.request[1:]
	}

	return len(this.request)
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Ping(t);
 */
