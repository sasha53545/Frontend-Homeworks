/**
 * You could use this file for local running any code
 *
 * Just run in the console "npm start"
 *
 */
<<<<<<< HEAD
console.log("Hello World");
=======


function mergeSort(arr) {
    console.log('[obabichev] =========mergeSort========', arr);
    if (arr.length <= 1) {
        return arr;
    }

    const n = arr.length;
    console.log('[obabichev] arr', arr);
    console.log('[obabichev] n', n);


    const mid = (n - n % 2) / 2;
    console.log('[obabichev] mid', mid);

    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid, n);

    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);
    const afterJoint = join(arr1, arr2);
    console.log('[obabichev] afterJoin', afterJoint);
    return afterJoint;
}

function split(arr) {
    const n = arr.length;
    const mid = (n - n % 2) / 2;

    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid, n);
    return [arr1, arr2];
}

function join(arr1, arr2) {
    // console.log('[obabichev] arr1', arr1);
    // console.log('[obabichev] arr2', arr2);
    const result = [];
    let i = 0; // arr1
    let j = 0; // arr2

    while (i < arr1.length || j < arr2.length) {
        if (j >= arr2.length || (arr1[i] < arr2[j] && i < arr1.length)) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}

// 1, 5, i10, 30, 67
// 2, 3, 4, j6, 100, 1000

console.log('[obabichev] mergeSort', mergeSort([1, 7, 5, 10, 9, 3, 2, 4, 77]));

// OR
// false false - false
// false true - true
// true false = true
// true true = true
>>>>>>> upstream/master
