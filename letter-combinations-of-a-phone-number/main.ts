function letterCombinations(digits: string): string[] {
    if (!digits.length) return [];

    const results: string[] = [];

    const map = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    recursive("", digits);
    
    function recursive(combine, digits) {
        if (!digits.length) {
            results.push(combine);
            return;
        }

        const digit = digits[0];
        const letters = map[digit];
        const restDigits = digits.slice(1);

        for (let i = 0; i < letters.length; i++) {
            recursive(combine + letters[i], restDigits);
        }
    }

    return results;
};
