import {maximumToys} from './maximumToys';

describe('maximumToys', () => {

    it('simple test', () => {
        expect(maximumToys([1, 2, 3, 4], 7))
            .toEqual(3);
    });

    it('bigger one', () => {
        expect(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
            .toEqual(4);
    });

    it('buy all', () => {
        expect(maximumToys([10, 20, 30], 100000))
            .toEqual(3);
    });

});
