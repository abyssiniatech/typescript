"use strict";
function identity(value) {
    return value;
}
identity(10); // T = number
identity("TS"); // T = string
// generic with function 
function wrapInArray(item) {
    return [item];
}
const numbers = wrapInArray(5); // type: number[]
const words = wrapInArray("hello"); // type: string[]
