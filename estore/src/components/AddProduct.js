import React, { Component } from "react";
import "./AddProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", price: 0, category: "" };
    this.stockEleRef = null;
  }

  handleChange = e => {
    this.setState({ title: e.target.value.toUpperCase() });
  };

  setStock = () => {
    console.dir(this.stockEleRef);
    this.stockEleRef.value = Math.random() * 1000;
  };

  makeStateChange = () => {
    this.setState({ title: "some" + Math.random() });
  };

  getStock = () => {
    alert(this.stockEleRef.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  assignStockElementRef = eleRef => {
    console.log("executing assignStockElementRef");
    this.stockEleRef = eleRef;
  };

  componentDidMount() {
    console.log("componentDidMount");
    console.dir(this.stockEleRef);
  }

  render() {
    console.log("render", this.stockEleRef);

    return (
      <div>
        <button onClick={this.setStock}>Set Stock</button>
        <button onClick={this.getStock}>Get Stock</button>
        <button onClick={this.makeStateChange}>Make State Change</button>
        <fieldset>
          <legend>Add Product</legend>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Product Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <label htmlFor="price">Product Price</label>
            <input
              type="number"
              value={this.state.price}
              onChange={e => this.setState({ price: e.target.value })}
            />
            <label htmlFor="category">Product Category</label>
            <select
              value={this.state.category}
              onChange={e => this.setState({ category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="ELECTRONICS">ELECTRONICS</option>
              <option value="GROCERY">GROCERY</option>
              <option value="CLOTHING">CLOTHING</option>
            </select>
            <label htmlFor="stock">Product Stock</label>
            <input type="number" ref={this.assignStockElementRef} />
            <button>Add Product</button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default AddProduct;
