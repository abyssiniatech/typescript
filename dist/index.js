"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "surafel",
    age: 30,
    email: "sura@gmail.com"
};
function information(person) {
    return { name: person.name, age: person.age, email: person.email };
}
const val = information({ name: person.name, age: person.age, email: person.email });
console.log(val);
//# sourceMappingURL=index.js.map