import {countSwaps} from './countSwaps';

describe('countSwaps', () => {
    it('first', () => {
        expect(countSwaps([4, 2, 3, 1]))
            .toEqual(5);
    });

    it('second', () => {
        expect(countSwaps([3, 2, 1]))
            .toEqual(3);
    });
});
