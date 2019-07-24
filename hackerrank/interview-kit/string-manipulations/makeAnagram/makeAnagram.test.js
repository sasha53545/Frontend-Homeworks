import {makeAnagram} from './makeAnagram';

describe('makeAnagram', () => {
    it('test1', () => {
        expect(makeAnagram('cde', 'abc'))
            .toEqual(4)
    });

    it('test2', () => {
        expect(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
            .toEqual(30)
    });

    it('test3', () => {
        expect(makeAnagram('showman', 'woman'))
            .toEqual(2)
    });
});
