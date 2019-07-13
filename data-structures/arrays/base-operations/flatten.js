/**
 * Flattens array a single level deep.
 *
 * In any wrong case should return empty array.
 *
 * @param arr
 */
export const flatten = (arr) => {
    //TODO
    var emptyArray = [];
    var obj = {};
    if(Array.isArray(arr) == false) {
        return emptyArray;
    } else {
        return arr.flat(1);
    }
}