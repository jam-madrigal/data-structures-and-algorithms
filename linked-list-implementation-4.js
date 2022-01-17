// Convert this to a doubly linked list

// Each node will have to have a new previous attribute which connects to the previous node
// The traverseToIndex() method can be used to get the previous node
class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        // The previous of the head will be null
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      // Since append is adding to the end, the former tail becomes the value of prev
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        // Add prev property
        prev: null
      }
      newNode.next = this.head;
      // The prev of the former this.head should now be the newNode
      this.head.prev = newNode;
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
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null,
        // Add prev roperty
        prev: null
      }
      const leader = this.traverseToIndex(index-1);
      // Change holdingPointer to follower
      const follower = leader.next;
      leader.next = newNode;
      // Point to leader as prev
      newNode.prev = leader;
      newNode.next = follower;
      // Make sure the follower now points to the inserted node
      follower.prev = newNode;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      // Store the node that will link to the leader, after the removal of unwantedNode
      const leaderLink = unwantedNode.next;
      // Make sure the leaderLink has its prev value updated to be the leader
      leaderLink.prev = leader;
      leader.next = leaderLink;
      this.length--;
      return this.printList();
    }
  }
  
  let myLinkedList = new DoublyLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
  myLinkedList.remove(2);
  
  
  
  