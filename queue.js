class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new QueueNode(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value) {
        const newNode = new QueueNode(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this
    }

    dequeue() {
        if(!this.first) {
            return null
        }
        let elementToBeDequeued = this.first;
        if(this.length === 1) {
            this.first = null;
            this.last = null;
            return elementToBeDequeued;
        }
        this.first = this.first.next;
        elementToBeDequeued.next = null;
        this.length--;
        return elementToBeDequeued;
    }
}