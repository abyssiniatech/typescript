// type alice in typescript 
// types in typescrippt --- IGNORE ---
type studentprops ={
    name: string;
    age: number;
    email? : string;
}
const student={
    name : "surafel",
    age:23,
    email: "sura@gmail.com"
}
function Student(student:studentprops){
   return student
}
const  result =Student(student)
console.log('====================================');
console.log(` my name is ${result.name}`);
console.log(` i 'm ${result.age} years old`);
console.log(`my email addrese is ${result.email}`);
console.log('====================================');