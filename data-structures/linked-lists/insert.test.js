import {LinkedList} from './LinkedList';
import {LLNode} from './LLNode';

describe('[LinkedList] insert', () => {
    it('test 0', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.insert(0, 100);

        expect(list.toString()).toEqual('100 -> 4 -> 3 -> 2 -> 1 -> 0');

    });

    it('test 1', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.insert(1, 100);

        expect(list.toString()).toEqual('4 -> 100 -> 3 -> 2 -> 1 -> 0');

    });

    it('test 2', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.insert(2, 200);

        expect(list.toString()).toEqual('4 -> 3 -> 200 -> 2 -> 1 -> 0');

    });

    it('test 3', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.insert(4, 300);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 300 -> 0');

    });

    it('test 4', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.insert(5, 1000);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0 -> 1000');

    });

    it('test 5', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.insert(6, 2000);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');
    });


    it('test 6', () => {

        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');

        list.insert(100, 3000);

        expect(list.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');
    });
});