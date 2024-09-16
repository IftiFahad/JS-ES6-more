const products = [
    { id: 1, name: 'dell', price: 20000 },
    { id: 2, name: 'hp', price: 21000 },
    { id: 3, name: 'asus', price: 22000},
]
class Product {
    country = 'BD';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
    console.log( `talking about ${talk}` );        

    }
} 
const lenovo = new Product('headphone')
// console.log( lenovo);
// lenovo.speak('kotha bolo');

class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
     }

    lecture() {
        console.log('teaching');
    }
}
const tapan = new Teacher('Tapon sir', 'Physics');
console.log(tapan);

const rahim = new Teacher('Rahim sir', 'Bio');
console.log(rahim);