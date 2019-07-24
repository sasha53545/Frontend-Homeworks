import {luckBalance} from './luckBalance';


describe('luckBalance', () => {
    it('test1', () => {
        expect(luckBalance(3, [[5, 1],
            [2, 1],
            [1, 1],
            [8, 1],
            [10, 0],
            [5, 0]
        ]))
            .toEqual(29)
    });

    it('test2', () => {
        expect(luckBalance(5, [
            [13, 1],
            [10, 1],
            [9, 1],
            [8, 1],
            [13, 1],
            [12, 1],
            [18, 1],
            [13, 1]
        ]))
            .toEqual(42)
    });

    it('test3', () => {
        expect(luckBalance(2, [
            [5, 1],
            [4, 0],
            [6, 1],
            [2, 1],
            [8, 0]
        ]))
            .toEqual(21)
    });
});
