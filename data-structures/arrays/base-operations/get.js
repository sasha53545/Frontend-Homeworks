/**
 * Return element of array by the index
 *
 * Should work for the negative indexes, in this case -1 is the last element of array
 *
 * In the case of wrong data should return undefined
 *
 * @param arr
 * @param index
 */
export const get = (arr, index) => {
    //TODO
    var n;
    if(arr == null) {
        return n;
    } 
    if(index < 0) { // как-то так
        var max = arr.length + index;
        for (var i = 0; i <= max; i + index) {
            console.log(index);
            return arr[max];
        }
    } else {
    return arr[index];
    }
};
