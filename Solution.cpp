
#include<vector>
using namespace std;

class Solution {
public:
    const size_t ALPHABET = 26;

    int longestPalindrome(vector<string>& words) {

        vector<vector<int>> pairFrequency(ALPHABET, vector<int>(ALPHABET, 0));
        for (string pair : words) {
            pairFrequency[pair[0] - 'a'][pair[1] - 'a']++;
        }

        int count_pairsOfDifferentLetters = 0;
        int count_pairsOfSametLetters = 0;
        int remainder_oddPairOfSameLatters = 0;

        for (int i = 0; i < ALPHABET; i++) {

            count_pairsOfSametLetters += (pairFrequency[i][i] - pairFrequency[i][i] % 2);
            if (pairFrequency[i][i] % 2 == 1) {
                remainder_oddPairOfSameLatters = 1;
            }

            for (int j = i + 1; j < ALPHABET; j++) {
                count_pairsOfDifferentLetters += min(pairFrequency[i][j], pairFrequency[j][i]);
            }
        }

        return 4 * count_pairsOfDifferentLetters + 2 * (count_pairsOfSametLetters + remainder_oddPairOfSameLatters);
    }
};
