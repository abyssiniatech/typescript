"use strict";
// never type in typescript
function errorFunc(message, code) {
    throw new Error(`Error ${code}: ${message}`);
}
errorFunc("This is an error", 500);
