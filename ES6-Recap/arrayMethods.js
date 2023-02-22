

const numbers = [2, 1, 7, 4, 3, 4, 8, 0];
const names = ['rakib', 'sakib', 'mezbah', 'rofiq', 'cavill'];

// for each 
// numbers.forEach(number => console.log(number));

// map 
const newArray = numbers.map((k, r, j) => k * 2);
// console.log(newArray);

// filter 
const bigger = numbers.filter(big => big > 4);
// console.log(bigger)

// find 
const big = numbers.find(big => big > 4);
console.log(big)