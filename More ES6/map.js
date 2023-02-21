

const number = [3, 54, 6, 2, 67];

// const makeItDouble = x => x * 2;

const doubleIt = number.map(x => x * 2);
// console.log(doubleIt);


const makeFiveTimes = [3, 1, 5, 5, 7, 2, 8, 6].map(x => x * 5);
// console.log(makeFiveTimes);



const friends = ['Rakib', 'Kuddus', 'BatMan', 'Kang'];

const firstChar = friends.map(n => n[0]);
const nameLength = friends.map(k => k.length);

// console.log(` ${firstChar}  
//               ${nameLength}  `);




const products = [
    { id: 1, name: 'laptop', price: 344444 },
    { id: 2, name: 'iphone', price: 144444 },
    { id: 1, name: 'tablet', price: 44444 }
];

const price = products.map(product => product.price);
console.log(price);