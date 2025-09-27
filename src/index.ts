// never type in typescript

function errorFunc(message: string,code:number): never {
    throw new Error(`Error ${code}: ${message}`);
}
errorFunc("This is an error",500);