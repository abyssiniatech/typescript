function identity<T>(value: T): T {
  return value;
}

identity<number>(10);    // T = number
identity<string>("TS");  // T = string



// generic with function 
function wrapInArray<T>(item: T): T[] {
  return [item];
}

const numbers = wrapInArray(5);       // type: number[]
const words = wrapInArray("hello");   // type: string[]
