import {get} from './get';

describe('get', () => {
    it('main use case', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(get(arr, 2))
            .toEqual(3);
    });

    it('wrong input 1', () => {
        expect(get(null))
            .toEqual(undefined);
    });

    it('wrong input 2', () => {
        expect(get([1, 2, 3], null))
            .toEqual(undefined);
    });

    it('empty result', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(get(arr, 100000))
            .toEqual(undefined);
    });

    it('negative index', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(get(arr, -1))
            .toEqual(6);
    });

    it('negative index 2', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(get(arr, -3))
            .toEqual(4);
    });

    it('wrong negative index', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(get(arr, -10000))
            .toEqual(undefined);
    });
});