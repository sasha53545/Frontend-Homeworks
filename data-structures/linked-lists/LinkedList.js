import { LLNode } from './LLNode';
import { thisExpression, nullLiteral } from '@babel/types';

export class LinkedList {
    /**
     * @type {LLNode}
     */
    root = null;

    constructor(root = null) {
        this.root = root;
    }

    /**
     * This method should return number of elements in the list
     * @return {number}
     */
    length() {
        let len = 0;
        let node = this.root;
        if (!node) {
            return 0;
        }
        while (node) {
            len++;
            node = node.next;
        }

        return len;

    }

    /**
     * This method should add new Node with data 'data' in the end of the list
     * @param data
     */
    push(data) {
        const node = new LLNode(data);
        let currentNode = this.root;
        if (!currentNode) {
            this.root = node;
            return node;
        }
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        console.log();
        return node;
    }

    /**
     * This method should add node with data 'data' in the position 'index'.
     *
     * If in the list less than index - 1 elements, new node should not be added
     *
     * @param index
     * @param data
     */
    insert(index, data) {
        console.log('this', this);
        console.log('this.root', this.root);
        const node = new LLNode(data);
        if (index === 0) {
            node.next = this.root;
            this.root = node;
            return this.root;
        }

        let target = findNodeByIndex(index - 1, this.root);
        console.log('t', target);
        if (!target) {
            return;
        }
        node.next = target.next;
        target.next = node;

        function findNodeByIndex(index, n) {
            let current = n;
            for (let i = 0; i < index; i++) {
                if (current.next === null) {
                    return 0;
                }
                current = current.next;
            }
            return current;
        }
        return this.root;
    }

    /**
     * this method should remove element with index 'index'
     * @param index
     */
    remove(index) {
        if (!this.root) {
            return;
        }
        if (index === 0) {
            this.root = this.root.next;
            return;
        }
        let target = findNodeByIndex(index - 1, this.root);
        let target2 = findNodeByIndex(index + 1, this.root);

        if (!target) {
            return;
        }

        target.next = target2;

        function findNodeByIndex(index, n) {
            let current = n;
            for (let i = 0; i < index; i++) {
                if (current.next === null) {
                    return null;
                }
                current = current.next;
            }
            return current;
        }
    }

    /**
     * This method should add another list in the end of the current
     *
     * @param list {LinkedList}
     */
    join(list) {
        let current2 = list.root;
        if (!this.root) {
            this.root = current2;
        } else {
            let current = this.root;
            while (current.next) {
                current = current.next;
            }
            if (!current.next) {
                current.next = current2;
            }
        }
 
    }

    /**
     * Should return true if one of nodes has next link to the one of previous nodes
     *
     * (you can use fast/slow iterators pattern)
     */
    isCycled() {
        if (!this.root) {
            return false;
        }
        let current1 = this.root;
        let current2 = this.root.next;
        console.log(current1);
        console.log(current2);
        while (current1 || current2) {
            current1 = current1.next;
            current2 = current2.next.next;
            if (current1 === current2) {
                return true;
            }
        }
        return false;
    }

    /**
     * This method is used for tests, but you can use it for your testing
     *
     * This method returns list as string like '4 -> 3 -> 2 -> 1 -> 0', Where 4 is the data of the root element
     *
     * @return {string}
     */
    toString() {
        const data = [];
        let node = this.root;
        while (node && data.indexOf(node) === -1) {
            data.push(node);
            node = node.next;
        }
        return data
            .map(node => node.data)
            .join(' -> ');
    }
}
