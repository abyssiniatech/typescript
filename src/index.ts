//object types in ts
// declare types
type informationProps = {
    name: string,
    age: number,
    email: string
}


const person: informationProps = {
    name: "surafel",
    age: 30,
    email: "sura@gmail.com"
}




function information(person: informationProps) {
    return { name: person.name, age: person.age, email: person.email };
}

const val = information({ name: person.name, age: person.age, email: person.email });
console.log(val);




export {};