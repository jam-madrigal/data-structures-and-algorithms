class HashTable {
  constructor(size){
    this.data = new Array(size);

  }

  set(key, value) {
    // takes two parameters
    // first parameter will be a key in a "bucket" in an object/hash
    // second parameter will be the value

    // these will be pushed (or unshifted?) into an array of arrays, located at this.data, containing these key value pairs
    this.data.unshift([key, value]);
    // right now we are not dealing with deleting anything, just setting and getting, so let's not overcomplicate it yet, and just push to an array in order, and I don't suppose a condition is creating our own push() function
    // make sure there is at least a key parameter, 
    //if no value, default 0 for value, 
    // make sure the inputs are a string and an integer for key/value respectively
    // if the key already exists, update the value within the key with the passed in value, so if 'apples' already exists within an array within this.data, go into index [1] of that index within this.data which contains the passed in key, and += or add the passed in value to the already existing value, 
    //  if this is just meant to update an already counted value, do not bother with the latter step and simply change the value to that which has been passed through the function


  }

  get(key) {
    // will take in a key as a parameter
    // this will iterate through the array in this.data, so use a for loop
    // where the key is equal to the 0 index in the array, within the this.data array, it will return that value
    // ie, if there are 5 apples, and apples is passed in as a parameter, it will return "there are 5 apples"
    // make sure input is a string
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i][0] === key) {
        return this.data[i][1];
      }
    }

  }




  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')


