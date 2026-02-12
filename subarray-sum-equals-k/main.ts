function subarraySum (nums: number[], k): number {
    const prefixSumMap: Record<number, number> = {
        0: 1
    };
    
    let total = 0;

    let cumu = 0;

    for (let i = 0; i < nums.length; i++) {
        cumu += nums[i]

        if (prefixSumMap[cumu - k]) {
            total += prefixSumMap[cumu - k]
        }

        if (prefixSumMap[cumu]) {
            prefixSumMap[cumu] += 1;
        }  else {
            prefixSumMap[cumu] = 1;
        }
    }

    return total;
}