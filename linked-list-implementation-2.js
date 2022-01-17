// add a method prepend() to the linked list that adds a node to the beginning of the list

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      console.log(newNode)
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      //Code here
      // Make a new node based on the value, setting the previous head as the newNode.next
      // Leave next as null, as we should set it to the current head later
      const newNode = {
        value: value,
        next: null
      };
      // Create a pointer setting the previous head as the next of the new head
      newNode.next = this.head;
      // Set newNode as the new head of the linked list
      this.head = newNode;
      // Increase the length of the linked list by 1
      this.length++;
      // Log the new list to verify it worked correctly
      return this;
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1)
  
  
  
  