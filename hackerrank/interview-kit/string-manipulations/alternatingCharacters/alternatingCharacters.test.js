import {alternatingCharacters} from './alternatingCharacters';

describe('alternatingCharacters', () => {
    it('test1', () => {
        expect(alternatingCharacters('AAAA'))
            .toEqual(3)
    });

    it('test2', () => {
        expect(alternatingCharacters('BBBBB'))
            .toEqual(4)
    });

    it('test3', () => {
        expect(alternatingCharacters('ABABABAB'))
            .toEqual(0)
    });

    it('test4', () => {
        expect(alternatingCharacters('AAABBBAABB'))
            .toEqual(6)
    });

    it('test5', () => {
        expect(alternatingCharacters('ABABABAA'))
            .toEqual(1)
    });
});
