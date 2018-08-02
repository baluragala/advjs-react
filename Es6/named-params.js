function product({ name, price, stock }) {
  //const { name, price, stock } = productObject;
  return `<div>
            <h1>${name}</h1>
            <h2>${price}</h2>
            <h3>${stock}</h3>
          </div>`;
}

let p = { name: "iphone", price: 2000, stock: 20 };
product(p);
