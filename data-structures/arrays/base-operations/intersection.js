/**
 * Creates an array of unique values that are included in all given arrays.
 *
 * The order and references of result values are determined by the first array.
 *
 * In any wrong case return empty array
 *
 * @param arrays
 */
export const intersection = (arr1, arr2, arr3, arr4) => {
    var emptyArray = [];
    /*var arrays = arr1.concat(arr2,arr3,arr4);*/
    if((arr1 == null) || (arr2 == null) /*|| (arr3 == null) || (arr4 == null)*/) {
        return emptyArray;
    }
    var compareTwoArrays = arr1.filter(function(obj) {
         return arr2.indexOf(obj) >= 0; 
        });
    return compareTwoArrays;
}