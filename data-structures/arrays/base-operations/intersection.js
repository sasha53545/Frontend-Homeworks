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
    if((arrays[0] == null) || (arrays[1] == null) /*|| (arr3 == null) || (arr4 == null)*/) {
        return [];
    }
    if (Array.isArray(arrays[0]) && Array.isArray(arrays[1]) && !Array.isArray(arrays[2]) && !Array.isArray(arrays[3])) {
        var compareTwoArrays = arrays[0].filter(function(obj) {
            return arrays[1].indexOf(obj) >= 0; 
        });
        console.log('1 ' + compareTwoArrays);
        return compareTwoArrays;
    } else { 
        if (Array.isArray(arrays[0]) && Array.isArray(arrays[1]) && Array.isArray(arrays[2]) && Array.isArray(arrays[3])) {
        var compareTwoArrays1 = arrays[0].filter(function(obj) {
            return arrays[1].indexOf(obj) >= 0; 
        });
        var compareTwoArrays2 = arrays[2].filter(function(obj) {
            return arrays[3].indexOf(obj) >= 0; 
        });
        var compareTwoArrays3 = compareTwoArrays1.filter(function (obj) {
            return compareTwoArrays2.indexOf(obj) >= 0;
        }); 

        console.log('2: ' + compareTwoArrays3);
        return compareTwoArrays3;
        }
    }
}