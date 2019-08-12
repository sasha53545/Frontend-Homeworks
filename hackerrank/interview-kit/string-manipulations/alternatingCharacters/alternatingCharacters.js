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
            console.log(s);
        }
    }
    console.log(sumLetter);
    return sumLetter;
}
//0 1 2 3 4 5 6 7 8 9
//A A A B B B A A B B
//
//for i=0
//1. s[0] === s[1] sum=1
//2. s[1] === s[2] sum=2
//3. s[2] === s[3] sum=2
//4. s[3] === s[4] sum=1
//5. s[4] === s[5] sum=2
//6. s[5] === s[6] sum=2
//7. s[6] === s[7] sum=1
//8. s[7] === s[8] sum=1
//9. s[8] === s[9] sum=2