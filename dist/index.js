"use strict";
function generics(value) {
    return (value);
}
let output = generics(123);
console.log('====================================');
console.log(output);
console.log('====================================');
// object generics 
function objectGenerics(obj) {
    return (obj);
}
let objOutput = objectGenerics({ name: 'John', age: 30 });
console.log('====================================');
console.log(objOutput.name);
console.log(objOutput.age);
console.log('====================================');
// generics in array 
function arrayGenerics(arr) {
    return (arr);
}
const outputArr = arrayGenerics([1, 2, 3, 4, 5]);
console.log('====================================');
console.log(outputArr);
console.log('====================================');
// simple array generics 
function genArr(arr) {
    return arr;
}
const val = genArr([1, 2]);
// simple object generics
function objgen(obj) {
    return obj;
}
const objval = objgen({ name: 'John', age: 30 });
console.log(objval.name);
console.log(objval.age);
