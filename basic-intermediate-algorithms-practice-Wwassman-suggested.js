// Setting all negative values in an array to 0

let myNegativeArray = [1, 2, 3, 4, -7, -9, -1, 2, -3];

function setNegativesTo0(array){
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 0;
    }
  }
      console.log(array);
}

setNegativesTo0(myNegativeArray);
