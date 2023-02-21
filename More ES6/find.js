

const numbers = [3, 7, 2, 44, 75, 2, 4, 55, 7, 43, 21, 3];


const products = [
    { id: 1, name: 'laptop', price: 344444 },
    { id: 2, name: 'iphone', price: 144444 },
    { id: 1, name: 'tablet', price: 44444 }
];


const bigNum = numbers.find(num => num > 20);
console.log(bigNum);

const expensive = products.find( p => p.price > 100000);
console.log(expensive);