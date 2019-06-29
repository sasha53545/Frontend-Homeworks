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
    return arr.sort(compare);
};
