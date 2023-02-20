
// Arrow functions
const getFullName = (firstName, lastName) => firstName + ' ' + lastName;

const division = (num1, num2) => num1 / num2;

const multiply = (first, second) => first * second;

// single parameter, brackets don't need 
const tripleIt = num => num * 3;

// MultiLine Arrow functions 
const getMath = (num1, num2) => {
    const add = num1 + num2;
    const minus2 = add - 2;
    return minus2 * 3;

}


// calling functions
const fullName = getFullName('Rakib', 'Khan');
const result = division(10, 2);
const resultMultiplication = multiply(3, 5);
const total = tripleIt(8);
const math = getMath(5,3);


console.log(math);
// console.log(total);
// console.log(fullName, resultMultiplication, result);