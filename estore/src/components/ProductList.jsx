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

  // this method is not useful as we are not focusing on state creation
  // but i have used this to show the flow of props - ignore any erros / warnings
  // in console
  static getDerivedStateFromProps(props, state) {
    console.log(
      `7-ProductList-received "SUBSTATE(as requested in mapStateToProps)" props from Provider component - ${JSON.stringify(
        props
      )}`
    );
    return null;
  }

  getProducts = () => {
    console.log(
      "1-ProductList- Button was clicked, and this event will be delegated as an action to provider"
    );
    console.log(this.props);
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
    console.log(
      `8-ProductList-rendering with new props - ${JSON.stringify(this.props)}`
    );
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

function mapStateToProps(wholeApplicationState) {
  console.log(
    `6-ProductList - Provider component executed mapStateToProps with whole application state ${JSON.stringify(
      wholeApplicationState
    )}`
  );
  const subStateNeededByProductListFromWholeApplicationState = {
    products: wholeApplicationState.products,
    productSelectionMessage: wholeApplicationState.productSelectionMessage
  };
  return subStateNeededByProductListFromWholeApplicationState;
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps");
  return {
    getProductsOnLoad: function() {
      const action = getProductsActionCreator();
      console.log(
        `3-ProductList requests Provider component to dispatch an action - ${JSON.stringify(
          action
        )}`
      );
      dispatch(action);
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
