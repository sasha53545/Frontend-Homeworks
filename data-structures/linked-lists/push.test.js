import {LinkedList} from './LinkedList';
import {LLNode} from './LLNode';

describe('[LinkedList] push', () => {
    it('test 1', () => {
        const list = new LinkedList();
        list.push('test-data');
        expect(list.length()).toEqual(1);
        expect(list.root.data === 'test-data');
    });

    it('test 2', () => {
        const root = new LLNode('root');

        const list = new LinkedList(root);

        list.push('one-more-item');

        expect(list.length()).toEqual(2);

        expect(list.root.next.data).toEqual('one-more-item');
    });

    it('test 3', () => {
        const list = new LinkedList();

        for (let i = 0; i < 5; i++) {
            list.push(i);
        }

        expect(list.length()).toEqual(5);

        let node = list.root;
        expect(node.data).toEqual(0);

        node = node.next;
        expect(node.data).toEqual(1);

        node = node.next;
        expect(node.data).toEqual(2);

        node = node.next;
        expect(node.data).toEqual(3);

        node = node.next;
        expect(node.data).toEqual(4);

        expect(node.next).toEqual(null);
    });
});