"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayProduct(product) {
    // console.log(product);
    console.log('====================================');
    console.log(product.name);
    console.log(product.id);
    console.log(product.price);
    console.log('====================================');
}
const pr = displayProduct({ id: 1, name: "Laptop", price: 999.99 });
console.log('====================================');
console.log(pr);
console.log('====================================');
//# sourceMappingURL=index.js.map