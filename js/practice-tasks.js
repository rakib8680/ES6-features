

// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

const multiply = (a, b, c) => a * b * c;
// console.log(multiply(3,2,3));





// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biriyani.
const backTick = `
I am a web developer.
I love to code.
I love to eat biriyani
`
// console.log(backTick);




// 3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.
const add = (value1, value2 = 15) => value1 + value2;
// console.log(add(5));





//4   Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.
const evenElements = (array) => {
    const newArray = [];
    for (let element of array) {
        if (element.length % 2 == 0) {
            newArray.push(element);
        }
    }
    return newArray;
}
const array = ['roki', 'mihan', 'rakib', 'nafiss']
const result = evenElements(array);
// console.log(result);







//5   Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.
const numbers = [3, 4, 2, 6, 7, 5];

const calculation = (array) => {
    let sum = 0;
    for (let elements of array) {
        const element = elements;
        const power = Math.pow(element, 2);
        sum += power;
    }
    return (avg = sum / array.length).toFixed(2);


}

const finalResult = calculation(numbers);
// console.log(finalResult);









// 6 Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.
const array1 = [23, 54, 32, 855, 34];
const array2 = [64, 78, 21, 15, 75, 11];

const combineArray = (first, second) => {
    const newArray = [...first, ...second];
    return Math.max(...newArray);
}

const output = combineArray(array1, array2);
console.log(output);