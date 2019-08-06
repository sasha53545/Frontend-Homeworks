import {maximumToys} from './maximumToys';

describe('countSwaps', () => {
    it('first', () => {
        expect(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
            .toEqual(4);
    });

    it('second', () => {
        expect(maximumToys([3, 7, 2, 9, 4], 15))
            .toEqual(3);
    });
});