// Incomplete, no comments because the code was talked through live over a Discord call

const obj1 = {
    "a" : 1,
    "b" : 2,
    "c" : 3,
  }
  
  const obj2 = {
    "c" : 3,
    "b" : 2,
    "a" : 1,
  }
  
  function checkIfAnagram(obj, obj2) {
    for (const letter in obj) {
  
      if (obj[letter] === obj2[letter]) {
        continue
      } else
      console.log('Not an anagram!');
      return ("Not an anagram");
    }
    console.log("Is an anagram!");
    return ("Is an anagram!");
  }
  
  checkIfAnagram(obj1, obj2);
  
  
  // Figure out how to convert the strings to objects properly later
  function stringToObject(str1, str2) {
    let string1 = {};
    let string2 = {};
  
    for (let i = 0; i < str1.length; i++) {
      if (string1[str1[i]] >= 1) {
        string1[str1[i]] += 1;
      } else {
        string1[str1[i]] = 1;
      }
  
    for (let i = 0; i < str2.length; i++) {
      console.log(i);
      if (string2[str2[i]] >= 1) {
        string1[str2[i]];
      } else
      string2[str2[i]] = 1;
    }
    }
    console.log(string1);
    console.log(string2);
  }
  
  stringToObject('beepus', 'boopus');