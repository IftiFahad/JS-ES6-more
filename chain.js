// data access

const data = [{ id: 1, name: 'Habib', address: 'BD' }];

console.log(data[0].address);

const products = {
    count: 5000,
    data:
        [
            {
            id: 1,
            name: 'Product 1',
            price: 100
            },
            {
                id: 2,
                name: 'Product 2',
                price: 200
            }
    ]
}
console.log(products.data[1].price);

const user = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: {
        street: {
            first: '123',
            second: 'Main Street'
        } ,
        
        state: 'NY'
    }
}
console.log(user.address?.street.second);