class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

const person = new Person('Himu', 22);
console.log(person);
person.sleep();
