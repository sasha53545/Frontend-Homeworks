import {get} from './index';

test('get([1, 2, 3], 1)', () => {
    expect(get([1, 2, 3], 1)).toBe(2);
});
