import {countingValleys} from './countingValleys';

describe('sockMerchant', () => {
    it('first', () => {
        const n = 8;
        const s = 'UDDDUDUU';

        expect(countingValleys(n, s))
            .toEqual(1);
    });

    it('second', () => {
        const n = 12;
        const s = 'DDUUDDUDUUUD';

        expect(countingValleys(n, s))
            .toEqual(2);
    });
});
