const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0)
console.log(sum);