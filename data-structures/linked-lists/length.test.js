import {LinkedList} from './LinkedList';
import {LLNode} from './LLNode';

describe('[LinkedList] length', () => {
    it('test 1', () => {

        const list = new LinkedList();
        expect(list.length()).toEqual(0);
    });

    it('test 2', () => {

        let root = null;
        for (let i = 0; i < 10; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.length()).toEqual(10);
    });

    it('test 2', () => {
        let root = null;
        for (let i = 0; i < 20; i++) {
            root = new LLNode('random data ' + i, root);
        }
        const list = new LinkedList(root);

        expect(list.length()).toEqual(20);
    });

    it('test 3', () => {
        const last = new LLNode('last');

        const root = new LLNode('root', last);

        const list = new LinkedList(root);

        expect(list.length()).toEqual(2);
    });
});