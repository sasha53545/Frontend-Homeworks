const defaultCompare = (first, second) => {
    if (first < second) {
        return -1;
    }
    if (first > second) {
        return 1;
    }

    return 0;
};

export const quickSort = (arr, compare = defaultCompare) => {
    // TODO
    var end = arr.length; 
    var start = 0;
    console.log(arr);
    sort(arr, start, end);
    console.log(arr);
    return arr;
}

function sort(arr, start, end) {
    if (end - start <= 1) {
        return ;
    }

    var j = start - 1;
    var pivot = arr[end - 1];
    var tmp = 0;

    for (var i = start; i < end - 1; i++) {
        if (arr[i] < pivot) {
            j++;
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }

    j++;

    tmp = arr[end - 1];
    arr[end -1] = arr[j];
    arr[j] = tmp;

    sort(arr, start, j);
    sort(arr, j + 1, end);
}

//[4, 2, 3, 5, 1]
//[1, 2, 3, 4, 5]
