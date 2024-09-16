// using map for doubling the number
const numbers = [4, 5, 6, 9];

function doubleIt(num)
{
    return num * 2;

}
const result = numbers.map(doubleIt);
console.log(result);

// arrow and map functions
const numbers1 = [5, 6, 7, 10];
const doubled = numbers1.map(num => num * 2)
const fiveadd = numbers1.map(num => num + 5);
console.log(doubled);
console.log(fiveadd);


// Using a for loop for reference
// const doubled = [];
// for (const num of numbers) { 
//     const double = num * 2;
//     doubled.push(double);

// }
// console.log(numbers);
// console.log(doubled);
