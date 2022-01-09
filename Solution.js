
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {

    const ALPHABET = 26;
    const ASCII_SMALL_CASE_A = 97;

    const pairFrequency = new Array(ALPHABET);
    for (let i = 0; i < ALPHABET; i++) {
        pairFrequency[i] = new Array(ALPHABET).fill(0);
    }

    for (let pair of words) {
        pairFrequency[pair.codePointAt(0) - ASCII_SMALL_CASE_A][pair.codePointAt(1) - ASCII_SMALL_CASE_A]++;
    }

    let count_pairsOfDifferentLetters = 0;
    let count_pairsOfSametLetters = 0;
    let remainder_oddPairOfSameLatters = 0;

    for (let i = 0; i < ALPHABET; i++) {

        count_pairsOfSametLetters += (pairFrequency[i][i] - pairFrequency[i][i] % 2);
        if (pairFrequency[i][i] % 2 === 1) {
            remainder_oddPairOfSameLatters = 1;
        }

        for (let j = i + 1; j < ALPHABET; j++) {
            count_pairsOfDifferentLetters += Math.min(pairFrequency[i][j], pairFrequency[j][i]);
        }
    }
    return 4 * count_pairsOfDifferentLetters + 2 * (count_pairsOfSametLetters + remainder_oddPairOfSameLatters);
};
