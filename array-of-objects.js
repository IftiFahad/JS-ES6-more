const products = [
    { id: 1, name: 'dell', price: 20000 },
    { id: 2, name: 'hp', price: 21000 },
    { id: 3, name: 'asus', price: 22000},
]

// map
const names = products.map(p => p.name)
console.log(names);
const price = products.map(p => p.price)
console.log(price);

// forEach products
products.forEach(p => console.log(p.id));

// filter

const expensiveProducts = products.filter(p => p.price > 20000)
console.log(expensiveProducts);

// find
const affordable = products.find(p => p.price < 22000)
console.log(affordable);

// reduce
const sum = products.reduce((p, c) => p + c.price, 0)
console.log(sum);