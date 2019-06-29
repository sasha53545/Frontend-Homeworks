import {flatten} from './flatten';

describe('flatten', () => {
    it('main use case', () => {
        const arr = [1, [2, 3], 4, [5, [6]]];
        expect(flatten(arr))
            .toEqual([1, 2, 3, 4, 5, [6]]);
    });

    it('wrong input 1', () => {
        expect(flatten(5))
            .toEqual([]);
    });

    it('wrong input 2', () => {
        expect(flatten({}))
            .toEqual([]);
    });

    it('flatted array', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(flatten((arr)))
            .toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('initial array have not been changed', () => {
        const arr = [1, [2, 3], 4, [5, [6]]];
        flatten(arr);
        expect(arr)
            .toEqual([1, [2, 3], 4, [5, [6]]]);
    });
});