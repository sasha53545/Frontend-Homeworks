import {sockMerchant} from './sockMerchant';

describe('sockMerchant', () => {
    it('first', () => {
        const n = 9;
        const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

        expect(sockMerchant(n, ar))
            .toEqual(3);
    });

    it('second', () => {
        const n = 10;
        const ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

        expect(sockMerchant(n, ar))
            .toEqual(4);
    });
});
