import React, { useState } from "react";

const DoublyLinkedListComponent = () => {
    const [dll] = useState(new DoublyLinkedList());
    const [values, setValues] = useState([]);
    const [input, setInput] = useState("");

    const updateList = () => {
        setValues([...dll.toArray()]);
    };
    //To insert a value after the data
    const handleAppend = () => {
        if (input) {
            dll.append(input);
            updateList();
            setInput("");
        }
    };

    //To insert a value before the data
    const handlePrepend = () => {
        if (input) {
            dll.prepend(input);
            updateList();
            setInput("");
        }
    };

    //To delete 
    const handleDelete = (value) => {
        dll.delete(value);
        updateList();
    };

    return (
        <div className="div-alignment" >
            <h3>3)Doubly Linked List</h3>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter value"
            />
            <button onClick={handleAppend}>Append</button>
            <button onClick={handlePrepend}>Prepend</button>

            <h4>Linked List:</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {values.map((val, index) => (
                    <li key={index} style={{ margin: "5px", display: "flex", alignItems: "center" }}>
                        {val}
                        <button
                            onClick={() => handleDelete(val)}
                            style={{
                                marginLeft: "10px",
                                background: "red",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoublyLinkedListComponent;

//Creating a node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

//Creating functionality
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
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

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    delete(value) {
        if (!this.head) return;

        let current = this.head;

        while (current) {
            if (current.value === value) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                this.length--;
                return;
            }
            current = current.next;
        }
    }

    toArray() {
        const nodes = [];
        let current = this.head;
        while (current) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }
}