/**
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 *
 * @param s
 */
export function alternatingCharacters(s) {
    s = s.split('');
    console.log(s);
    let sumLetter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            sumLetter++;
        } else if (s[i] === s[i+1] && sumLetter%2){
            sumLetter--;
        }
    }
    return sumLetter;
}
