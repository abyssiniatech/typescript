"use strict";
// union in typscript 
// union type in typescript is you set two probablity in typescript
// example
Object.defineProperty(exports, "__esModule", { value: true });
const id = 12;
const name = "sura2015";
// check the status in the function 
function chickStataus(Status) {
    if (Status === "success") {
        return ("success");
    }
    else if (Status === "error") {
        return "error";
    }
    else {
        return "loading";
    }
}
const statusval = chickStataus("error");
console.log('====================================');
console.log(statusval);
console.log('====================================');
//# sourceMappingURL=index.js.map