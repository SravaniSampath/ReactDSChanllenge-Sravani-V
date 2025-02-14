import React, { useState } from "react";

const QueueComponent = () => {
  const [queue] = useState(new Queue());
  const [input, setInput] = useState("");
  const [queueValues, setQueueValues] = useState([]);
  const [peekValue, setPeekValue] = useState(null);

  const updateQueue = () => {
    setQueueValues([...queue.toArray()]);
    setPeekValue(queue.peek());
  };

  //To insert a data
  const handleEnqueue = () => {
    if (input.trim() !== "") {
      queue.enqueue(input.trim());
      updateQueue();
      setInput("");
    }
  };

  //To remove a data
  const handleDequeue = () => {
    queue.dequeue();
    updateQueue();
  };

  const handlePeek = () => {
    setPeekValue(queue.peek());
  };

  return (
    <div className="div-alignment">
      <h3>4)Queue Implementation </h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a name"
      />
      <button onClick={handleEnqueue}>Enqueue</button>

      <h4>Queue (Back to Front)</h4>
      <p>{queueValues.join(" → ") || "Queue is empty"}</p>

      <button onClick={handleDequeue} disabled={queueValues.length === 0}>
        Dequeue
      </button>

      <h4>Peek (Front Element): {peekValue || "None"}</h4>
      <button onClick={handlePeek}>Peek</button>
    </div>
  );
};

export default QueueComponent;


class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.unshift(element); // Add to the back
    }
  
    dequeue() {
      return this.items.pop(); // Remove from the front
    }
  
    peek() {
      return this.items[this.items.length - 1] || null; // View front element
    }
  
    toArray() {
      return [...this.items]; // Return queue state
    }
  }
  