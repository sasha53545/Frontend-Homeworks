class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;

        this.length = 0;
    }

    add(value) {
        const node = new Node(value);
        let currentNode = this.head;
        if (!currentNode) {
            this.head = node;
            return node;
        }

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        return node;
    }
    
    insert(index, data) {
        const node = new Node(data);
        let target = findNodeByIndex(index);
        node.next = target.next;
        target.next = node;

        return this.head;
    }

    findNodeByIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
        }
        return currentNode;
    }
}

const list = new LinkedList();
console.log(list.head);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
//console.log(list);
//console.log(list.findNodeByIndex(2));
console.log(list.head);