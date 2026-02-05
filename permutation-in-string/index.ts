function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const s1Map = new Map<string, number>();
    const windowMap = new Map<string, number>();

    for (const c of s1) {
        s1Map.set(c, (s1Map.get(c) || 0) + 1);
    }

    let left = 0, right = 0;

    while (right < s2.length) {
        const curr = s2[right];
        windowMap.set(curr, (windowMap.get(curr) || 0) + 1);
        right++;

        if (right - left > s1.length) {
            const leftChar = s2[left];
            windowMap.set(leftChar, windowMap.get(leftChar)! - 1);
            if (windowMap.get(leftChar) === 0) {
                windowMap.delete(leftChar);
            }
            left++;
        }

        if (mapsAreEqual(s1Map, windowMap)) return true;
    }

    return false;
};

function mapsAreEqual(map1: Map<string, number>, map2: Map<string, number>): boolean {
    if (map1.size !== map2.size) return false;
    for (const [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}