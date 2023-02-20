

const personalDetails = {
    name: 'Rakib khan',
    roll: 586921,
    age: 20,
    college: 'Feni Computer Institute',
    phone: 459844985432,
    city: 'PQ, Feni'
}

const city = personalDetails.city;
// console.log(city);

// object destructuring 
const { roll } = personalDetails;
const { college } = personalDetails;
// console.log(roll, college);




// Array DEstructuring 
const numbers = [33, 5, 53, 44];
const [first, second, third, last] = numbers
console.log(first, third, last);