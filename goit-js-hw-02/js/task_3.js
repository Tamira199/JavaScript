const findLongestWord = function findLongestWord(string) {
    const str = string.split(' ');
    let longest = 0;
    let longestWord;
    for (let i = 0; i < str.length; i += 1) {
        if (longest < str[i].length) {
            longest = str[i].length;
            longestWord = str[i];
        }
    }
    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped overy the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'