/**
 * Creates an array of unique values that are included in all given arrays.
 *
 * The order and references of result values are determined by the first array.
 *
 * In any wrong case return empty array
 *
 * @param arrays
 */
export const intersection = (...arrays) => {
    /*var arrays = arr1.concat(arr2,arr3,arr4);*/
    var sameValues = [];
    console.log(arrays[0]);
    console.log(arrays[1]);
    if((arrays[0] == null) || (arrays[1] == null)) {
        return [];
    }
    arrays[0].filter(function (element) {
        for (var i = 1; i < arrays.length; i++) {
            if (arrays[i].indexOf(element) >= 0) {
            
            } else {
                return false;
            }
        }
        if (true) {
            sameValues.push(element);
        }
    });
    console.log(sameValues);
    return sameValues;
}