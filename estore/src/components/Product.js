import React, { Component } from "react";
import ProductList from "./ProductList";

class Product extends Component {
  render() {
    return (
      <div>
        <h1>Wrapper for ProductList</h1>
        <ProductList />
      </div>
    );
  }
}

export default Product;
