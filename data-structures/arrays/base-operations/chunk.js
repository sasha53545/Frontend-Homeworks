/**
 * Function chunk creates an array of elements split into groups the length of size.
 *
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * In any case of wrong input method should return empty array.
 *
 * @param arr
 * @param size
 */
export const chunk = (arr, size) => {
    //TODO
    var temparray = [];
    if (arr == null) {
        return [];
    } else {
        for (var i = 0; i < arr.length; i += size) {
            temparray.push(arr.slice(i, i + size));
        }
        return temparray;
    }
    };