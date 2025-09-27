// class in typescript
   class  Animal{
     name:string;
     age:number;
     constructor(name:string,age:number){
         this.name=name;
         this.age=age;
     }
}   



function printAnimal(animal:Animal):void{
     console.log(animal.name,animal.age);
}
printAnimal(new Animal("cat",3));
const  animal1 = new Animal("dog",2);
console.log('====================================');
console.log(animal1);
console.log('====================================');


