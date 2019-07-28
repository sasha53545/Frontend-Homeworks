/**
 * Flattens array a single level deep.
 *
 * In any wrong case should return empty array.
 *
 * @param arr
 */
export const flatten = (arr) => {
    //TODO
    var arr2 = [];
    for (var i = 0; i < arr.length; i ++) {
        if (Number.isInteger(arr[i]) === true) {
            arr2.push(arr[i]);
        }
        if (Array.isArray(arr[i]) === true) {
            arr[i].forEach(element => {
                arr2.push(element);
            });
        }
    }
    console.log(arr2);
    return arr2;
}