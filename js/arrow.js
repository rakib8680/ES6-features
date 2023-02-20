
// you can set your parameter value 
function calculateNum(value1 = 0, value2 = 5) {
    const formula = value1 + value2;
    return formula;
}

// const result = calculateNum(10);
const result = calculateNum();
console.log(result);