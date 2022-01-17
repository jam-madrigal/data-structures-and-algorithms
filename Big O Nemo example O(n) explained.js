const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// Creates an array with nemo 100 times, or however many, try bigger and bigger numbers
const large = new Array(100).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i  < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
}

// Change between nemo and everyone/large variables to see how the time to run this code changes
findNemo(large);

// How this code scales

// Adding let t0 = performance.now(); (timestamps at this point, basically) at the beginning and t1 = performance.now(); to the end will tell how long it takes the function to run and is built into javascript when you subtract the start and end timestamps

// The code starts out taking 0-1 milliseconds for the first two arrays, but the large one goes from 11 milliseconds to 66 milliseconds (100 and 1000 respectively)

// The function runtime becomes longer; the function becomes slower and slower; the larger our input gets, and on differing machines this can have drastically different results as well. It is dependent on how fast the cpu is, what programming language is being used, and what other applications are being ran on the computer etc.

// This is why Big O is important. It is the language we use to have an objective way to determine which code is better as it scales, regardless of the computer hardware executing said code.

// Put simply, as the input elements increase, in this case the array size, how many more operations (things we have to do in the loop) does our code have to do? This is the conceept of algorithmic efficiency which big O explains.

// Instead of calculating a specific time, big O can calculate how many operations we have to do in general.

// This code scales linearly. As the number of inputs increase, the number of operations also increases. If the array had 10 indices, it could potentially have to run 10 times, one per each index, before it found nemo,and so on for other amounts. The big O is dependent on the number of inputs.

// This is O(n) or Linear Time. The (n) could represent O(1), O(10), O(1000), and so on... O(n) is potentially the most common.