import React, { useState } from "react";

const SingleLinkedListComponent = () => {
  const [sll] = useState(new SinglyLinkedList());
  const [values, setValues] = useState([]);
  const [input, setInput] = useState("");
  const [nthInput, setNthInput] = useState("");
  const [nthValue, setNthValue] = useState(null);

  const updateList = () => {
    setValues([...sll.toArray()]);
  };

  //To insert a value
  const handleAppend = () => {
    if (input.trim()) {
      sll.append(input);
      updateList();
      setInput("");
    }
  };

  //To find the nth element
  const handleFindNthFromEnd = () => {
    const nth = parseInt(nthInput, 10);
    if (!isNaN(nth)) {
      setNthValue(sll.findNthFromEnd(nth));
    }
  };

  return (
    <div className="div-alignment">
      <h3>2)Singly linked list </h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={handleAppend}>Append</button>

      <h4>Linked List:</h4>
      <p>{values.join(" → ") || "List is empty"}</p>

      <h4>Find nth Last Element</h4>
      <input
        type="number"
        value={nthInput}
        onChange={(e) => setNthInput(e.target.value)}
        placeholder="Enter nth position"
      />
      <button onClick={handleFindNthFromEnd}>Find</button>

      {nthValue !== null && <h4>Nth Last Element: {nthValue}</h4>}
    </div>
  );
};

export default SingleLinkedListComponent;


class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.length++;
    }
  
    findNthFromEnd(n) {
      if (n <= 0 || n > this.length) return null;
  
      let first = this.head;
      let second = this.head;
  
      // Move `first` pointer n steps ahead
      for (let i = 0; i < n; i++) {
        if (!first) return null;
        first = first.next;
      }
  
      // Move both pointers until `first` reaches the end
      while (first) {
        first = first.next;
        second = second.next;
      }
  
      return second.value;
    }
  
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      return result;
    }
  }