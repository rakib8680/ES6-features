


// Destructuring Array 
// -----------------------
const [a, n, k] = [3, 67, 2];
// console.log(a+k);

const array = ['rakib', 'batman', 44, 62, 'gullit', 32];

const [rk, bw, ...c] = array;
// console.log(c);
console.log(`${rk} is the new ${bw} .`);
