import {jumpingOnClouds} from './jumpingOnClouds';

describe('sockMerchant', () => {
    it('first', () => {
        const c = [0, 0, 1, 0, 0, 1, 0];

        expect(jumpingOnClouds(c))
            .toEqual(4);
    });

    it('second', () => {
        const c = [0, 0, 0, 1, 0, 0];

        expect(jumpingOnClouds(c))
            .toEqual(3);
    });
});
