// Convert the previous data structure to use arrays instead of nodes

class Stack {
    constructor(){
      this.data = [];
      this.bottom = this.data[0];
    }
    peek() {
      return this.data[this.data.length - 1];
    }
    push(value){
      this.data.push(value);
      return this;
    }
    pop(){
      this.data.pop();
      return this;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.peek();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  myStack.peek();
  myStack.pop();
  myStack.peek();
  myStack.pop();
  myStack.peek();
  myStack.pop();
  myStack.peek();
  
  
  //Discord
  //Udemy
  //google
  