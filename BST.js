class BSTNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BSTNode(value)
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true) {
            if(newNode.value === temp.value) return undefined;
            if(newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this
                }
                temp=temp.left
            } else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this
                }
                temp=temp.right
            }
        }
    }

    contains(value) {
        if(this.root === null) {
            return false
        }
        let temp = this.root
        while(true) {
            if(value === temp.value) return true;
            if(value < temp.value) {
                if(temp.left?.value === undefined) return false;
                if(temp.left.value === value) return true;
                temp = temp.left
            } else {
                if(temp.right?.value === undefined) return false;
                if(temp.right.value === value) return true;
                temp = temp.right
            }
        }
    }

    rContains(value, currentNode = this.root) {
        if(currentNode === null) return false;
        if(value === currentNode.value) return true;
        if(value < currentNode.value) {
            currentNode = currentNode.left
            rContains(value, currentNode)
        } else {
            currentNode = currentNode.right
            rContains(value, currentNode)
        }
    }

    rInsert(value, currentNode = this.root) {
        if(currentNode === null) {
            this.root = new BSTNode(value);
            return this
        }
        if(newNode.value < currentNode.value) {
            currentNode = currentNode.left
            this.rInsert(value, currentNode)
        } else {
            currentNode = currentNode.right
            this.rInsert(value, currentNode)
        }
        return currentNode
    }

    BFS() {
        let currentNode = this.root
        let queue = [];
        let results = [];
        queue.push(currentNode)
    
        while(queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value)
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        return results;
    }
}