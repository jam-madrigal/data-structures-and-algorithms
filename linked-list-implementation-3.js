// add a method insert() to the linked list that adds a node to the specified index.

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
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
  
    insert(index, value){
      //Code here
      // Validate parameters
  
      // Check if they are trying to insert to the head or tail, or an index higher than exists, in which case re-use the append/prepend functions
      if (index === 0) {
        return this.prepend(value);
      };
  
      if (index === (this.length - 1)) {
        return this.append(value);
      };
  
      if (index >= this.length) {
        return this.append(value);
      };
      // create a new node, or the class of Node if created, using the value
      const newNode = {
        value: value,
        next: null
      }
      // Finding the index at which to insert
      const leader = this.traverseToIndex(index-1);
      // Holding the initial .next value of the index specified, in a variable in memory, to add to the new node
      const holdingPointer = leader.next;
      // Update the initial specified index as linking to the new insertion
      leader.next = newNode;
  
      // Update the new node to link to what this index with a different value originally linked to and increase the length of the list by 1
      newNode.next = holdingPointer;
      this.length++;
  
      return this.printList();
    }
  
  // A function that keeps updating a pointer with incremental .next to this.head until it reaches the desired index in the linked list
    traverseToIndex(index) {
      // check parameters (add later)
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  // Create a remove method/function which will travel to a specific index and remove it
    remove(index) {
      // Check that the index is valid, check if it is an integer and greater than or equal to 0, and that it is not longer than this.length
      if (index >= 0 && index <= this.length) {
      // Traverse to the specified index and store that location in a variable
      const leader = this.traverseToIndex(index-1);
      // Store the node that will be removed, which is the .next of the leader
      const nodeToRemove = leader.next;
      // Change the pointer in the leader to the node after the node to remove, and decrease the length by 1, since we removed a node
      leader.next = nodeToRemove.next;
      this.length--;
  
      return this.printList();
      } else {
        return ("Not a valid index");
      }
  
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
  
  myLinkedList.remove(0);
  