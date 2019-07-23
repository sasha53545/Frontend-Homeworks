import {countSwaps} from './countSwaps';

describe('countSwaps', () => {

    it('simple test', () => {
        expect(countSwaps([4, 2, 3, 1]))
            .toEqual(5);
    });

    it('quite big array', () => {
        expect(countSwaps([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]))
            .toEqual(20);
    });

    it('sorted array', () => {
        expect(countSwaps([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
            .toEqual(0);
    });

});
