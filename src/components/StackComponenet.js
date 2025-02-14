import React, { useState } from "react";

const StackComponent = () => {
  const [stack] = useState(new Stack());
  const [input, setInput] = useState("");
  const [stackValues, setStackValues] = useState([]);
  const [peekValue, setPeekValue] = useState(null);

  const updateStack = () => {
    setStackValues([...stack.toArray()]);
    setPeekValue(stack.peek());
  };

 //To insert a value 
  const handlePush = () => {
    if (input.trim() !== "") {
      stack.push(input.trim());
      updateStack();
      setInput("");
    }
  };

  //To remove a data
  const handlePop = () => {
    stack.pop();
    updateStack();
  };

  const handlePeek = () => {
    setPeekValue(stack.peek());
  };

  return (
    <div className="div-alignment">
      <h3> 6)Stack Implementation </h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handlePush}>Push</button>

      <h4>Stack (Top to Bottom)</h4>
      <pre>
        {stackValues.map((val, index) => (
          <div key={index}>|{val}|</div>
        ))}
      </pre>

      <button onClick={handlePop} disabled={stackValues.length === 0}>
        Pop
      </button>

      <h4>Peek (Top Value): {peekValue || "None"}</h4>
      <button onClick={handlePeek}>Peek</button>
    </div>
  );
};

export default StackComponent;

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element); // Add to the top
    }
  
    pop() {
      return this.items.pop(); // Remove from the top
    }
  
    peek() {
      return this.items[this.items.length - 1] || null; // View top element
    }
  
    toArray() {
      return [...this.items].reverse(); // Reverse for top-to-bottom display
    }
  }
  