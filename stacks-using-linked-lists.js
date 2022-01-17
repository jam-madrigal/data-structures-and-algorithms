class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      // Return the top Node
      return this.top;
    }
    push(value){
      // Take in a new node with the passed in value
      const newTop = new Node(value);
      // Make sure the first node added is always the bottom
      if (this.length === 0) {
        this.bottom = newTop;    
      }
      // Store the previous this.top in a variable, but only if at least one node already exists already exists to prevent this.top is undefined errors and to perform more efficiently
      if (this.length > 0) {
        const oldTop = this.top;
        
        // Set the new node.next as the previously stored this.top
        newTop.next = oldTop;
      }
      // Set the new node as the new top
      this.top = newTop;
      // Increment this.length by +1
      this.length++;
      return this;
    }
  
    pop(){
  
      // Check if there is only one node left, and make sure it's removed from memory and not still stored in this.bottom
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      // Store the this.top.next in a variable to make it the new top if it exists
      if (this.length > 0) {
        const newTop = this.top.next;
        // Set the top of the stack to the previously stored variable, this removes pointers to the old top 
        this.top = newTop;
      } else {
        return ("The stack is already empty.");
      }
      // Decrement the length of the stack
      this.length--;
      return this;
    }
    //isEmpty
    isEmpty() {
      if (this.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  
  }
  
  const myStack = new Stack();
  
  
  myStack.push("Discord");
  myStack.pop();
  myStack.peek();
  
  
  //Discord
  //Udemy
  //google
  