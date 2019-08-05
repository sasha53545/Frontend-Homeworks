const defaultCompare = (first, second) => {
    if (first < second) {
        return -1;
    }
    if (first > second) {
        return 1;
    }

    return 0;
};

export const mergeSort = (arr, compare = defaultCompare) => {
    // TODO
    if (arr.length <= 1) {
        return arr;
    }

    console.log('arr: ' + arr);
    var middle = Math.floor(arr.length / 2);
    var arrLeft = arr.slice(0, middle);
    var arrRight = arr.slice(middle);
    console.log('arrLeft: ' + arrLeft);
    console.log('arrRight: ' + arrRight);

    var sortArrLeft = mergeSort(arrLeft);
    console.log('sortArrLeft: ' + sortArrLeft);
    var sortArrRight = mergeSort(arrRight);
    console.log('sortArrRight: ' + sortArrRight);

    var result = merge(sortArrLeft, sortArrRight);
    console.log('result: ' + result);
    return result.sort(compare);
}

function merge(sortArrLeft, sortArrRight) {
    var i = 0;
    var j = 0;
    var newArray = [];

    while (i < sortArrLeft.length || j < sortArrRight.length) {
        if (i === sortArrLeft.length) {
            newArray.push(sortArrRight[j]);
            j++;
        } else if (j === sortArrRight.length || sortArrLeft[i] < sortArrRight[j]) {
            newArray.push(sortArrLeft[i]);
            i++;
        } else {
                newArray.push(sortArrRight[j]);
                j++;
        }
    }
    return newArray;
}
