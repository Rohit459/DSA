// Heap is a binary tree.
// Each node has a value that is greater than each of its descendants.
// Max value is always at the top
// Heap is always complete. - fills left to right with out any gaps.
// Heap can have duplicates
// Max heap and Min Heap
// formulas when skipping 0
// Finding Children of parents //    |
// leftchild = 2 * parentIndex       | + 1
// rightchild = 2 * parentIndex + 1  | + 1

// Finding Parents //
// Math.floor(childIndex/2) | Math.floor((childIndex - 1)/2)

// Inserting a value. When inserting a value make sure that
// its inserted in such a way that it makes the heap complete

// now compare it to the parent node and if the new node is greater
// than the parent node, swap it.
// Repeat the above until new value is bubbled up to its correct place.

class Heap {
  #heap = [];

  getHeap() {
    return [...heap];
  }

  #leftChild(parentIndex) {
    const leftchild = 2 * parentIndex + 1;
    return leftchild;
  }

  #rightChild(parentIndex) {
    const rightchild = 2 * parentIndex + 1 + 1;
    return rightchild;
  }

  #parent(childIndex) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  insert(value) {
    this.#heap.push(value);
    childValue = value;
    childIndex = this.#heap.length - 1;
    while (childIndex > 0) {
      parentIndex = this.#parent(childIndex);
      parentValue = this.#heap[parentIndex];
      if (childValue > parentValue) {
        this.#swap(childIndex, parentIndex);
        childIndex = parentIndex;
      } else {
        break;
      }
    }
    return this.getHeap();
  }

  #sinkDown(index) {

  }

  remove() {
    // remove top
    // rearrange them and make tree complete - sinkdown

    if(this.#heap.length ===0) return null;
    if(this.#heap.length ===1) return this.#heap.pop()
        const maxValue = this.#heap[0]
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0)
        return maxValue;
  }
}
