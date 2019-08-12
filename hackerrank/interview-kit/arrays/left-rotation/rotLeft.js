/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation
 *
 * @param a
 * @param d
 * @return {*}
 */
export function rotLeft(a, d) {
    if (d === 0) {
        return a;
    }

    let left = a.slice(0, 1);
    let right = a.slice(1);

    console.log(a);
    return rotLeft([...right, ...left], d-1);
}