class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      // Create a new node with the passed in value
      const node = new Node(value);
      // If no this.first exists, the new node becomes this.first and this.last, and ends there
      if (!this.first) {
        this.first = node;
        this.last = node;
      } // Otherwise, the .next of the previous .last becomes the new node, and we update this.last to the new node
      else {
        this.last.next = node;
        this.last = node;
      }
      // Increment the length of the queue by 1
      this.length++;
      // return this
      return this;
  
    }
    dequeue(){
      // If the list is empty, just return null
      if (!this.first) {
        return null;
      }
      // If there is only one item, set it to null
      if (this.first === this.last) {
        this.last = null;
      }
      // If there is more than one item, update this.first to equal the this.first.next, effectively deleting the previously first item
      this.first = this.first.next;
      // Decrement the length of the queue by 1
      this.length--;
      // Return the queue
      return this;
  
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  
  myQueue.enqueue("Joy");
  myQueue.enqueue("Matt");
  myQueue.enqueue("Pavel");
  myQueue.dequeue();
  
  //Joy
  //Matt
  //Pavel
  //Samir
  
  