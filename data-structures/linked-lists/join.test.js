import {LLNode} from './LLNode';
import {LinkedList} from './LinkedList';

describe('[LinkedList] join', () => {
    it('test 0', () => {
        let root1 = null;
        for (let i = 0; i < 5; i++) {
            root1 = new LLNode(i, root1);
        }
        const list1 = new LinkedList(root1);

        let root2 = null;
        for (let i = 0; i < 5; i++) {
            root2 = new LLNode(i + 100, root2);
        }
        const list2 = new LinkedList(root2);

        list1.join(list2);

        expect(list1.toString())
            .toEqual('4 -> 3 -> 2 -> 1 -> 0 -> 104 -> 103 -> 102 -> 101 -> 100');
    });

    it('test 1', () => {
        const list1 = new LinkedList();

        let root2 = null;
        for (let i = 0; i < 5; i++) {
            root2 = new LLNode(i + 100, root2);
        }
        const list2 = new LinkedList(root2);

        list1.join(list2);

        expect(list1.toString())
            .toEqual('104 -> 103 -> 102 -> 101 -> 100');
    });

    it('test 2', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();

        list1.join(list2);

        expect(list1.toString())
            .toEqual('');
    });

    it('test 2', () => {
        const list1 = new LinkedList(new LLNode(1));
        const list2 = new LinkedList(new LLNode(2));
        const list3 = new LinkedList(new LLNode(3));
        const list4 = new LinkedList(new LLNode(4));

        list1.join(list2);
        list2.join(list3);
        list3.join(list4);

        expect(list1.toString())
            .toEqual('1 -> 2 -> 3 -> 4');
    });
});