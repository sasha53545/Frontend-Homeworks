import {intersection} from './intersection';

describe('flatten', () => {
    it('main use case', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 5, 6, 7, 8];
        expect(intersection(arr1, arr2))
            .toEqual([3, 5]);
    });

    it('wrong input 1', () => {
        expect(intersection(null))
            .toEqual([]);
    });

    it('wrong input 2', () => {
        expect(intersection([1, 2, 3], null))
            .toEqual([]);
    });

    it('empty result', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [6, 7, 8, 9];
        expect(intersection(arr1, arr2))
            .toEqual([]);
    });

    it('4 arrays', () => {
        const arr1 = [1, 2, 3, 100, 4, 8, 1000];
        const arr2 = [6, 100, 1000, 7, 8, 9];
        const arr3 = [1000, 10, 11, 7, 13, 14, 100];
        const arr4 = [15, 16, 1000, 11, 100, 18, 8];
        expect(intersection(arr1, arr2, arr3, arr4))
            .toEqual([100, 1000]);
    });
});