class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        word3Array = []

        tempMin = min(len(word1), len(word2))

        for i in range(tempMin):
            word3Array.append(word1[i])
            word3Array.append(word2[i])

        if len(word1) > tempMin:
            for i in range(tempMin, len(word1)):
                word3Array.append(word1[i])

        if len(word2) > tempMin:
            for i in range(tempMin, len(word2)):
                word3Array.append(word2[i])

        return ''.join(word3Array)