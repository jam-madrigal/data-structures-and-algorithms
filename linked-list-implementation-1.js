// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

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
      //Code here
      // First thing is to create a new node with the value
      const newNode = {
        value: value,
        next: null
      };
      // Attach this after the "10" node by setting the this.tail.next equal to the new node, we only need to add it at the end, so the tail is all we need
      this.tail.next = newNode;
      // The tail is now equal to the appended node, so let's set that
      this.tail = newNode;
      // Increase the length by 1, as we added a new node to the length
      this.length++;
      // Verify the code worked by returning the new linked list
      return this;
  
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  
  
  
  
  
  