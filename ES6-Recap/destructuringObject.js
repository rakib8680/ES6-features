

const person = {
    name: 'Rakib',
    age: 20,
    education: { college: 'Fci', semester: 4, shift: 'first' },
    address: 'Feni',
    roll: 586921,
    pin: [3, 7, 5, 8, 1, 4]
};


const { name, address: thikana, roll, ...remaining } = person;
// console.log(name, thikana, remaining);

const { college } = person.education;
// console.log(college)

const { pin } = person;
const [first, second, ...bakishob] = pin
console.log(bakishob);

const person2 = { ...person };
person2.isMale = true;
// console.log(person2);

