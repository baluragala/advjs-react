import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], productSelectionMessage: "" };
  }

  async componentDidMount() {
    let products = await fetch("http://localhost:4000/products").then(r =>
      r.json()
    );
    this.setState({ products });
  }

  onProductClicked = product => {
    this.setState({
      productSelectionMessage: `Current selected product : ${product.title}`
    });
  };

  removeChild = () => {
    this.state.products.pop();
    let products = [...this.state.products];
    this.setState({ products });
  };

  updateProduct = () => {
    let lastProduct = this.state.products.pop();
    let updatedProduct = { ...lastProduct, price: 5000, title: "new mi note" };
    this.state.products.push(updatedProduct);
    this.setState({ products: this.state.products });
  };

  render() {
    return (
      <div>
        <h1>Products</h1>
        <h3>{this.state.productSelectionMessage}</h3>
        <button onClick={this.removeChild}>Remove Last Child</button>
        <button onClick={this.updateProduct}>Update product</button>

        {this.state.products.map(p => (
          <ProductListItem
            product={p}
            key={p.id}
            productClicked={this.onProductClicked}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
