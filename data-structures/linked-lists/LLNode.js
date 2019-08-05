export class LLNode {
    data = null;

    /**
     * @type {LLNode}
     */
    next = null;

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}