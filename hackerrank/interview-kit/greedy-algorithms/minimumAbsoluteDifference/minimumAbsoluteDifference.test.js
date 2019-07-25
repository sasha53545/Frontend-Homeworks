import {minimumAbsoluteDifference} from './minimumAbsoluteDifference';

describe('minimumAbsoluteDifference', () => {
    it('test1', () => {
        expect(minimumAbsoluteDifference([3, -7, 0]))
            .toEqual(3)
    });

    it('test2', () => {
        expect(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]))
            .toEqual(1)
    });

    it('test3', () => {
        expect(minimumAbsoluteDifference([1, -3, 71, 68, 17]))
            .toEqual(3)
    });
});
