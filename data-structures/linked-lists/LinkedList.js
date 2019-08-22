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

    push(data) {
        const node = new LLNode(data);
        let currentNode = this.root;
        if(!currentNode) {
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
}
