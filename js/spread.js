

const largest = Math.max(3, 53, 64, 123, 57, 32, 453, 43, 34, 54, 4, 3, 56, 52, 211);
// console.log(largest);

const smallest = Math.min(3, 53, 64, 123, 57, 32, 453, 43, 34,);
// console.log(smallest);


// Use ( . . . ) Three dots to get all the elements from array 
const array = [33, 45, 2, 544, 75, 32, 56, 33, 7];
// console.log(...array);

// make new array from existing array 
const newArray = [...array];
newArray.push(44);
console.log(newArray);

const max = Math.max(...array);
// console.log(max);


const elements = ['rakib', 'khan', 20, 33, 'king', 23];
// console.log(...elements);