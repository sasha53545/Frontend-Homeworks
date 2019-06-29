import {selectionSort} from './selectionSort';

describe('selectionSort', () => {

    it('should work correct', function () {
        const arr = [4, 2, 3, 5, 1];
        expect(selectionSort(arr))
            .toEqual([1, 2, 3, 4, 5]);
    });

});
