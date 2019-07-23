import {hourglassSum} from './hourglassSum';

describe('hourglassSum', () => {

    it('simple test', () => {
        expect(hourglassSum(
            [
                [1, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0],
                [0, 0, 2, 4, 4, 0],
                [0, 0, 0, 2, 0, 0],
                [0, 0, 1, 2, 4, 0]
            ]))
            .toEqual(19);
    });

    it('quite big array', () => {
        expect(hourglassSum(
            [
                [1, 1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 0, 0],
                [0, 9, 2, -4, -4, 0],
                [0, 0, 0, -2, 0, 0],
                [0, 0, -1, -2, -4, 0],
            ]))
            .toEqual(13);
    });

    it('one more timer', () => {
        expect(hourglassSum(
            [
                [-9, -9, -9, 1, 1, 1],
                [0, -9, 0, 4, 3, 2],
                [-9, -9, -9, 1, 2, 3],
                [0, 0, 8, 6, 6, 0],
                [0, 0, 0, -2, 0, 0],
                [0, 0, 1, 2, 4, 0]
            ]))
            .toEqual(28);
    });

});
