import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { getProductsActionCreator } from "../actionCreators/product";
import { connect } from "react-redux";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.getProductsOnLoad();
  // }

  getProducts = () => {
    this.props.getProductsOnLoad();
  };

  onProductClicked = product => {
    // this.setState({
    //   productSelectionMessage: `Current selected product : ${product.title}`
    // });
  };

  removeChild = () => {
    // this.state.products.pop();
    // let products = [...this.state.products];
    // this.setState({ products });
  };

  updateProduct = () => {
    // let lastProduct = this.state.products.pop();
    // let updatedProduct = { ...lastProduct, price: 5000, title: "new mi note" };
    // this.state.products.push(updatedProduct);
    // this.setState({ products: this.state.products });
  };

  render() {
    return (
      <div>
        <h1>Products</h1>
        <h3>{this.props.productSelectionMessage}</h3>
        <button onClick={this.removeChild}>Remove Last Child</button>
        <button onClick={this.updateProduct}>Update product</button>
        <button onClick={this.getProducts}>Get products</button>
        {this.props.products.map(p => (
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

function mapStateToProps(applicationStateFromProvider) {
  console.log(applicationStateFromProvider);
  return {
    products: applicationStateFromProvider.products,
    productSelectionMessage:
      applicationStateFromProvider.productSelectionMessage
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    getProductsOnLoad: function() {
      dispatch(getProductsActionCreator());
    }
  };
}

const connectProductListToProvider = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ProductListWithReduxConnection = connectProductListToProvider(
  ProductList
);

export default ProductListWithReduxConnection;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProductList);
