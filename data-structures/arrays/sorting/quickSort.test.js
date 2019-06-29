import {quickSort} from './quickSort';

describe('quickSort', () => {

    it('should work correct', function () {
        const arr = [4, 2, 3, 5, 1];
        expect(quickSort(arr))
            .toEqual([1, 2, 3, 4, 5]);
    });

});