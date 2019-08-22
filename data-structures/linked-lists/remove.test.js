import {LinkedList} from './LinkedList';
import {LLNode} from './LLNode';

describe('[LinkedList] remove', () => {
    it('test 0', () => {

        const list = new LinkedList();

        expect(list.toString()).toEqual('');

        list.remove(1);

        expect(list.toString()).toEqual('');

    });

    it('test 1', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.remove(0);

        expect(list.toString()).toEqual('3 -> 2 -> 1 -> 0');

    });

    it('test 2', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.remove(1);

        expect(list.toString()).toEqual('4 -> 2 -> 1 -> 0');

    });

    it('test 3', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.remove(3);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 0');

    });

    it('test 4', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.remove(4);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1');

    });


    it('test 5', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.remove(5);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');
    });


    it('test 6', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.remove(1000);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');
    });
});