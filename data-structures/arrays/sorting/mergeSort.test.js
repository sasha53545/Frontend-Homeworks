import {mergeSort} from './mergeSort';

describe('mergeSort', () => {

    it('should work correct', function () {
        const arr = [4, 2, 3, 5, 1];
        expect(mergeSort(arr))
            .toEqual([1, 2, 3, 4, 5]);
    });

});