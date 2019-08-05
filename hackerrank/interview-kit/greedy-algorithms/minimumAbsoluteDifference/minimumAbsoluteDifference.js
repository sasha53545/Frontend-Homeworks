/**
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
 * 
 * @param arr
 */
export function minimumAbsoluteDifference(arr) {
    arr.sort(function (a, b) {
        return Math.abs(a) - Math.abs(b);
    });
    console.log('sort:' + arr);

    var arr2 = [];
    for (var i = 0; i < arr.length - 1; i++) {
        arr2.push(Math.abs(arr[i + 1] - arr[i]));
    }
    arr2.sort((a, b) => a - b);
    return Math.abs(arr2[0]);
}

