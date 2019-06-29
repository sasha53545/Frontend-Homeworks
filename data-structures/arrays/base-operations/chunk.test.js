import {chunk} from './chunk';
import {flatten} from './flatten';

describe('chunk', () => {

    it('main use case', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(chunk(arr, 3))
            .toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });

    it('wrong input 1', () => {
        expect(chunk(null, 3))
            .toEqual([]);
    });

    it('wrong input 2', () => {
        expect(chunk({}))
            .toEqual([]);
    });

    it('different result array sizes', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(chunk(arr, 4))
            .toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
    });

    it('input array is less than chunk size', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(chunk(arr, 20))
            .toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
    });
});