// filter selects items based on the selected conditions

const numbers = [3, 5, 7, 9, 10, 11];
const players = [75, 65, 70, 80, 55];
const selectedItems = players.filter(p => p > 70);
console.log(selectedItems); 
const selectedItems2 = players.filter(p => p % 2 === 1);
console.log(selectedItems2);