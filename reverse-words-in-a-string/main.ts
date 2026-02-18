function reverseWord(s: string[], left: number, right: number) {
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
}

function reverseWords(s: string): string {
    let array = s.split(' ').filter(Boolean);

    let leftIdx = 0;
    let rightIdx = array.length - 1;

    reverseWord(array, leftIdx, rightIdx);

    let newString = array[0];
    for (let i = 1; i < array.length; i++) {
        newString += ' ' + array[i]
    }

    return newString;
};