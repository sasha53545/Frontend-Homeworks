/**
 * https://www.hackerrank.com/challenges/2d-array/problem
 *
 * @param arr
 */
export function hourglassSum(arr) {
    var maxRow = 3;
    var maxColumn = 3;
    var result = [];
    for (var i = 0; i <= maxColumn; i++) {
       for (var j = 0; j <= maxRow; j++) {
           result.push(arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
       }
    }
    result.sort((a, b) => b - a);
    console.log(result[0]);
    return result[0];
}

/* j 0  1  2  3  4  5

i 0 [1, 1, 1, 0, 0, 0],
  1 [0, 1, 0, 0, 0, 0],
  2 [1, 1, 1, 0, 0, 0],
  3 [0, 0, 2, 4, 4, 0],
  4 [0, 0, 0, 2, 0, 0],
  5 [0, 0, 1, 2, 4, 0]
*/
