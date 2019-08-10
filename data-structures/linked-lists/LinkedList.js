import {LLNode} from './LLNode';

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
      return 0;
    }

    /**
     * This method should add new Node with data 'data' in the end of the list
     * @param data
     */
    push(data) {
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

    }

    /**
     * this method should remove element with index 'index'
     * @param index
     */
    remove(index) {

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


