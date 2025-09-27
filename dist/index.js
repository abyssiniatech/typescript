"use strict";
// class in typescript
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function printAnimal(animal) {
    console.log(animal.name, animal.age);
}
printAnimal(new Animal("cat", 3));
const animal1 = new Animal("dog", 2);
console.log('====================================');
console.log(animal1);
console.log('====================================');
