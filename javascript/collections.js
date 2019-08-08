/**
 * Do no use arr.map!!!
 * @param arr
 * @param callback (item, index, array) => newItem
 */
export const map = (arr, callback) => {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i], i));
    }
    console.log(newArray);
    return newArray;
};

/**
 * Do no use arr.filter!!!
 * @param arr
 * @param callback (item, index, array) => boolean
 */
export const filter = (arr, callback) => {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i]) == true) {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
    return newArray;
};

/**
 * Do no use arr.reduce!!!
 * @param arr
 * @param callback (collector, item, index, array) => newCollector
 * @param defaultValue
 * @return {*}
 */
export const reduce = (arr, callback, defaultValue) => {
    var sum = defaultValue;
    for (var i = 0; i < arr.length; i++) {
        sum = callback(sum ,arr[i], i);
    }
    console.log(sum);
    return sum;
};