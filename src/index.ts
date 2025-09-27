interface ProductProps {
  id: number;
  name: string;
  price?: number; // optional
}

function displayProduct(product: ProductProps): void {
    // console.log(product);
    console.log('====================================');
    console.log(product.name);
    console.log(product.id);
    console.log(product.price);
    console.log('====================================');
}
const pr=displayProduct({ id: 1, name: "Laptop", price: 999.99 })
console.log('====================================');
console.log(pr);
console.log('====================================');