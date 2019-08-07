import {LLNode} from './LLNode';

export class LinkedList {
    /**
     * @type {LLNode}
     */
    root = null;

    constructor(root = null) {
        this.root = root;
    }

    length() {

    }

    push(data) {

    }

    insert(index, data) {

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

