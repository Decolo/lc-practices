// orignal version
function longestCommonSubsequence(text1: string, text2: string): number {
  if (!text1.length || !text2.length) return 0;
  if (text1.length === 1 && text2.length === 1) return text1 === text2 ? 1 : 0;

  const arrays = new Array(text1.length);
  for (let i = 0; i < arrays.length; i++) {
    arrays[i] = new Array(text2.length).fill(0);
  }

  const firstCharOfText1 = text1.charAt(0);
  let firstCharMatchedFlag = false;
  for (let i = 0; i < text2.length; i++) {
    const temp = text2.charAt(i);
    if (temp === firstCharOfText1) {
      firstCharMatchedFlag = true;
    }

    if (firstCharMatchedFlag) {
      arrays[0][i] = 1;
    }
  }

  const firstCharOfText2 = text2.charAt(0);
  firstCharMatchedFlag = false;
  for (let i = 0; i < text1.length; i++) {
    const temp = text1.charAt(i);
    if (temp === firstCharOfText2) {
      firstCharMatchedFlag = true;
    }

    if (firstCharMatchedFlag) {
      arrays[i][0] = 1;
    }
  }

  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      const tempChar1 = text1.charAt(i);
      const tempChar2 = text2.charAt(j);

      arrays[i][j] = tempChar1 === tempChar2
        ? arrays[i - 1][j - 1] + 1
        : Math.max(arrays[i - 1][j], arrays[i][j - 1]);
    }
  }

  return arrays[text1.length - 1][text2.length - 1];
}

// case 1
// console.log(longestCommonSubsequence("abcde", "ace"));

console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv"));

console.log(longestCommonSubsequence("abcba", "abcbcba"));

// improved version
function longestCommonSubsequenceV2(text1: string, text2: string): number {
  if (!text1.length || !text2.length) return 0;

  // Create DP table with extra row/column for base case (empty string)
  const dp = new Array(text1.length + 1)
    .fill(0)
    .map(() => new Array(text2.length + 1).fill(0));

  // Fill DP table
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
}
