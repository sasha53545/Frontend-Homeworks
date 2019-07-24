const defaultCompare = (first, second) => {
    if (first < second) {
        return -1;
    }
    if (first > second) {
        return 1;
    }

    return 0;
};

export const selectionSort = (arr, compare = defaultCompare) => {
    // TODO
    var tmp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr.sort(compare);
};
