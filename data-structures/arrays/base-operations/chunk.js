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
    if (!Array.isArray(arr)) {
        return [];
    }

    if (!Number.isInteger(size) || size < 1) {
        return [];
    }

    const result = [];
    let position = 0;
    while (position < arr.length) {
        result.push(arr.slice(position, position + size));
        position += size;
    }

    return result;
};