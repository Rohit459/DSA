class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(value) {
        const newNode = new StackNode();
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new StackNode(value);
        if(!this.top) {
            this.top = newNode;
            this.length = 1;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        return this;
    }

    pop() {
        if(!this.top) return null;
        if(this.length === 1) {
            let elementToBePopped = this.top;
            this.top = null
            return elementToBePopped
        } else {
            let elementToBePopped = this.top;
            this.top = this.top.next;
            elementToBePopped.next = null;
            this.length--;
            return elementToBePopped;
        }
    }
}