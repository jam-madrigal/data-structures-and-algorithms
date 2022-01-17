//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(array) {
    // check that the type of the input is an array and exists, if not, return an error ie; if (array.constructor === array) proceed, else return "not an array"
    if (!Array.isArray(array)) {
      return ("An array was not passed through the function.")
    }
  
    else {
      const charactersObj = new Map();
  
      for (let i = 0; i < array.length; i++) {
  
          if (charactersObj[array[i]] === 1) {
            return (array[i]);
          } else {
          charactersObj[array[i]] = 1;
          }
  
      }
    }
    // have an empty object in which to insert each character, using the new Map(); class function or by initializing an empty object
  
    // iterate through the array, each time a new character is detected, insert it as a key into an object, the value does not matter because we are only seeing if it already exists, so run a lookup with that key/hash 
  
    // continue doing so, and for each subsequent integer, do a lookup to see if it already exists in the object
  
    // if it already exists in the object, then we know that there are at least 2, we can then return this key as the first recurring character
    return undefined;
  }
  
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2
  
  firstRecurringCharacter([2,5,5,2,3,5,1,2,4]);
  
  