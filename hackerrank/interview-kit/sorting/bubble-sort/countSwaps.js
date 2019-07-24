/**
 * https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
 *
 * @param arr
 */
export const countSwaps = (arr) => {
    var tmp = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                count++;
            }
        }
    }
    console.log(arr);
    return count;
};
