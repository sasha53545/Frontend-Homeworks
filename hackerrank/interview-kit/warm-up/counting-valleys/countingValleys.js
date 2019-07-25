/**
 * https://www.hackerrank.com/challenges/counting-valleys
 *
 * @param n
 * @param s
 */
export function countingValleys(n, s) {
    var valleys = 0;
    var isInValleys = false;
    var array = [];
    var level = 0;

    array = s.split('');
    for (var i = 0; i < array.length; i++) {

        if (array[i] === 'D' && level === 0 && !isInValleys) {
            level--;
            isInValleys = true;
            valleys++;
        } else {
            if (array[i] === 'D') {
                level--;
            }
            if (array[i] === 'U') {
                level++;
            } 
        }
        if (array[i] === 'U' && isInValleys && level === 0) {
            isInValleys = false;
        }
        console.log(level);
    }
    return valleys;
}

//   0  1  2  3  4  5  6  7
//   U  D  D  D  U  D  U  U
//   1  0 -1 -2 -1 -2 -1  0

//   0  1  2  3  4  5  6  7  8  9  10  11
//   D  D  U  U  D  D  U  D  U  U  U   D
//  -1 -2 -1  0 -1 -2 -1 -2 -1  0  1   0