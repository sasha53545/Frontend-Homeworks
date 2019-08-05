import {maximumToys} from './maximumToys';

<<<<<<< HEAD
describe('maximumToys', () => {

    it('simple test', () => {
        expect(maximumToys([1, 2, 3, 4], 7))
            .toEqual(3);
    });

    it('bigger one', () => {
=======
describe('countSwaps', () => {
    it('first', () => {
>>>>>>> upstream/master
        expect(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
            .toEqual(4);
    });

<<<<<<< HEAD
    it('buy all', () => {
        expect(maximumToys([10, 20, 30], 100000))
            .toEqual(3);
    });

=======
    it('second', () => {
        expect(maximumToys([3, 7, 2, 9, 4], 15))
            .toEqual(3);
    });
>>>>>>> upstream/master
});
