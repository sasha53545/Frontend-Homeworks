import {selectionSort} from './selectionSort';
import {quickSort} from './quickSort';
import {mergeSort} from './mergeSort';
import {printTable} from '../../../utils/printTable';

const ONE_TEST_SECONDS_LIMIT = 5;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(getRandomInt(0, 1000000000));
    }

    return result;
}

function main() {

    const table = [];
    table.push(['N', 'Selection sort', 'Merge sort', 'Quick sort']);

    const sizes = [1000, 10000, 100000];

    sizes.forEach(size => {
        const arr = generateRandomArray(size);
        table.push([
            size,
            testSortingFunction(arr, selectionSort),
            testSortingFunction(arr, mergeSort),
            testSortingFunction(arr, quickSort)
        ])
    });

    printTable(table);
}

function testSortingFunction(array, sortingFunction) {
    let iterations = 0;
    let totalTime = 0;

    while (totalTime < ONE_TEST_SECONDS_LIMIT * 1000) {
        const arrCopy = [...array];

        const hrstart = process.hrtime();
        runSorting(arrCopy, sortingFunction);
        const hrend = process.hrtime(hrstart);

        totalTime += hrend[0] * 1000 + hrend[1] / 1000000;
        iterations++;
    }

    return totalTime / iterations;
}

function runSorting(array, sortingFunction) {
    return sortingFunction(array);
}

main();
