class LLNode {
  value;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new LLNode(value);
    this.head = newNode;
    this.head = this.tail;
    this.length = 1;
  }

  push(value) {
    const newNode = new LLNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let temp = this.head;
    let pre;
    if (!this.head) return null;
    if (this.length === 1) {
      const node = this.tail;
      this.head = null;
      this.tail = nullthis.length = 0;
      return node;
    } else {
      const node = this.tail;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      return node;
    }
  }

  unshift(value) {
    const newNode = new LLNode(value);
    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for(let i = 0; i < index; i++) {
        temp = temp.next;
    }
    return temp
  }

  set(index, value) {
    if(index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for(let i = 0; i < index; i++) {
        temp = temp.next;
    }
    temp.value = value
    return this;
  }

//   insert(index, value) {
//     if(index < 0 || index >= this.length) return undefined;
//     const newNode = new LLNode(value);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//             this.length++
//         }
//         if(index === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//             this.length++;
//         }
//         if(index === this.length) {
//             this.tail.next = newNode;
//             this.tail = newNode;
//             this.length++;
//         }
//         let temp=this.head;
//         for(let i = 0; i < index; i++) {
//             temp = temp.next;
//         }
//         let after = temp.next;
//         temp.next = newNode;
//         newNode.next = after;
//         return this;
//   }

insert(index, value) {
    if (index < 0 || index >= this.length) return undefined; // Allow insertion at the end

    const newNode = new LLNode(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) this.tail = newNode; // Handle empty list case
    } else if (index === this.length) {
      if (!this.head) { // Handle empty list case
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    } else {
      let temp = this.head;
      let pre = null;
      for (let i = 0; i < index; i++) {
        pre = temp;
        temp = temp.next;
      }
      newNode.next = temp;
      pre.next = newNode;
    }

    this.length++;
    return this;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) {
        if(!this.head) return null;
        if(this.length === 1) {
            const temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--
            return temp;
        }
        //
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
        // misssed thi
    } else if(index === this.length -1) {
        let last = this.tail;
        let temp = this.head;
        let pre = null
        while(temp.next) {
            pre = temp
            temp = temp.next;
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        return last;
    } else {
        let temp = this.head;
        let pre = null
        for(let i = 0;i < index; i++) {
            pre = temp
            temp = temp.next;
        }
        const removed = temp;
        pre.next = temp.next
        this.length--
        return removed;
    }



  }
}
