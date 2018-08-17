import React, { Component } from "react";
import "./AddProduct.css";
import {
  TITLE_CHANGE,
  PRICE_CHANGE,
  CATEGORY_CHANGE
} from "../actionTypes/product";

import { connect } from "react-redux";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    //this.state = { title: "", price: 0, category: "" };
    this.stockEleRef = null;
  }

  handleChange = e => {
    if (e.target.name == "title") {
      this.props.handleTitleChange(e.target.value);
    } else if (e.target.name == "price") {
      this.props.handlePriceChange(e.target.value);
    } else {
      this.props.handleCategoryChange(e.target.value);
    }
    //this.setState({ title: e.target.value.toUpperCase() });
  };

  setStock = () => {
    console.dir(this.stockEleRef);
    this.stockEleRef.value = Math.random() * 1000;
  };

  makeStateChange = () => {
    //this.setState({ title: "some" + Math.random() });
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
              name="title"
              type="text"
              value={this.props.title}
              onChange={this.handleChange}
            />
            <label htmlFor="price">Product Price</label>
            <input
              name="price"
              type="number"
              value={this.props.price}
              onChange={this.handleChange}
            />
            <label htmlFor="category">Product Category</label>
            <select
              name="category"
              value={this.props.category}
              onChange={this.handleChange}
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

function mapStateToProps(wholeApplicationState) {
  console.log("mapStateToProps", wholeApplicationState);
  return {
    title: wholeApplicationState.productState.title,
    price: wholeApplicationState.productState.price,
    category: wholeApplicationState.productState.category
  };
}

function mapDispatchToProps(dispatchFunctionRefFromProvider) {
  return {
    handleTitleChange: function(title) {
      dispatchFunctionRefFromProvider({ type: TITLE_CHANGE, title });
    },
    handlePriceChange: function(price) {
      dispatchFunctionRefFromProvider({ type: PRICE_CHANGE, price });
    },
    handleCategoryChange: function(category) {
      dispatchFunctionRefFromProvider({ type: CATEGORY_CHANGE, category });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
