import {LLNode} from './LLNode';
import {LinkedList} from './LinkedList';

describe('[LinkedList] join', () => {
    it('test 0', () => {
        let root = null;
        for (let i = 0; i < 5; i++) {
            root = new LLNode(i, root);
        }
        const list = new LinkedList(root);

        expect(list.isCycled()).toEqual(false);
    });

    it('test 1', () => {
        const node1 = new LLNode(1);
        const node2 = new LLNode(2);
        const node3 = new LLNode(3);
        const node4 = new LLNode(4);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node2;

        const list = new LinkedList(node1);

        expect(list.isCycled()).toEqual(true);
    });
});