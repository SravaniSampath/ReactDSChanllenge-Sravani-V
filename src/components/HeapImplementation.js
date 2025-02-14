import React, { useState } from "react";

const HeapImplmentation = () => {
  const [heap] = useState(new Heap());
  const [input, setInput] = useState("");
  const [heapValues, setHeapValues] = useState([]);

  const updateHeap = () => {
    setHeapValues([...heap.toArray()]);
  };

  //To insert a value
  const handleInsert = () => {
    if (!isNaN(input) && input !== "") {
      heap.insert(parseInt(input, 10));
      updateHeap();
      setInput("");
    }
  };

  //To remove an element
  const handleRemoveRoot = () => {
    heap.removeRoot();
    updateHeap();
  };

  return (
    <div className="div-alignment">
      <h3> 7 & 8)Heap Implementation and Removing an Element</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleInsert}>Insert</button>

      <h4>Heap</h4>
      <p>{heapValues.join(" → ") || "Heap is empty"}</p>

      <button onClick={handleRemoveRoot} disabled={heapValues.length === 0}>
        Remove an Element
      </button>
    </div>
  );
};

export default HeapImplmentation;

class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[index] < this.heap[parentIndex]) { // Maintain heap property
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeRoot() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  toArray() {
    return [...this.heap];
  }
}
