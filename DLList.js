class DLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLList {
  constructor(value) {
    const newNode = new DLNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new DLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new DLNode(value);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    let temp = this.head.next;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head.next = null;
      temp.prev = null;
      this.head = temp;
    }
    this.length--;
  }

  //   get(index) {
  //     if(!this.head) return null;
  //     if (!this.head || index < 0 || index >= this.length) {
  //         return null; // Handle empty list or invalid index
  //       }
  //     if(this.length === 1) return this.head;
  //     let elementTobeGot = this.head
  //     for(let i = 0; i<index; i++) {
  //         elementTobeGot = elementTobeGot.next()
  //     }
  //     return elementTobeGot;
  //   }

  get(index) {
    if (!this.head) return null;
    if (!this.head || index < 0 || index >= this.length) {
      return null; // Handle empty list or invalid index
    } else {
      let elementTobeGot = this.head;
      if (index < this.length / 2) {
        for (let i = 0; i < index; i++) {
          elementTobeGot = elementTobeGot.next;
        }
      } else {
        elementTobeGot = this.tail;
        for(i = this.length - 1; i > index; i--) {
            elementTobeGot = elementTobeGot.prev;
        }
      }
      return elementTobeGot
    }
  }

  set(index, value){
    let temp = this.get(index);
    if(temp) {
        temp.value = value;
        return true;
    }
    return false;
  }

  insert(index, value) {
    
  }
}
