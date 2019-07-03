import {repeatedString} from './repeatedString';

describe('sockMerchant', () => {
    it('first', () => {
        const s = 'aba';
        const n = 10;

        expect(repeatedString(n, s))
            .toEqual(7);
    });

    it('second', () => {
        const s = '1';
        const n = 1000000000000;

        expect(repeatedString(n, s))
            .toEqual(1000000000000);
    });
});
