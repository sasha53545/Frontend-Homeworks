import {rotLeft} from './rotLeft';

describe('rotLeft', () => {

    it('simple test', () => {
        expect(rotLeft([1, 2, 3, 4, 5], 4))
            .toEqual([5, 1, 2, 3, 4]);
    });

    it('quite big array', () => {
        expect(rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10))
            .toEqual([77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77]);
    });

    it('and one more', () => {
        expect(rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13))
            .toEqual([87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60]);
    });

});
