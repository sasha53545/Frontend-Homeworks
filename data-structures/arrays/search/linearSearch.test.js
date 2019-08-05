import {linearSearch} from './linearSearch';

const sortedArr = [10, 12, 13, 17, 19, 22, 34, 77, 189, 256, 500, 1000, 20000];

describe('linearSearch', () => {
    it('index = 0', () => {
        const index = 0;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('index = 1', () => {
        const index = 1;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('index = 2', () => {
        const index = 2;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('index = 3', () => {
        const index = 3;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('index = 4', () => {
        const index = 4;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('index = 5', () => {
        const index = 5;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('index = 6', () => {
        const index = 6;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('index = 7', () => {
        const index = 7;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('index = length - 1', () => {
        const index = sortedArr.length - 1;
        expect(linearSearch(sortedArr, sortedArr[index])).toEqual(index);
    });

    it('-1', () => {
        expect(linearSearch(sortedArr, 327864)).toEqual(-1);
    });
});