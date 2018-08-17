//import React from "react";

// function ProductListItem({ product, productClicked }) {
//   //const { product, productClicked } = props;
//   return (
//     <div
//       style={{
//         border: "1px solid",
//         margin: 20,
//         backgroundColor: "lightgrey",
//         padding: 20
//       }}
//       onClick={() => productClicked(product)}
//     >
//       <h2>{product.title}</h2>
//       <h3>{product.price}</h3>
//     </div>
//   );
// }

import React, { Component } from "react";

class ProductListItem extends Component {
  constructor(props) {
    super(props);
    //console.log("1-constructor");
  }

  componentDidMount() {
    //console.log("3-componentDidMount");
  }

  componentDidUpdate() {
    //console.log("4-componentDidUpdate");
  }

  componentWillUnmount() {
    //console.log("5-componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //debugger;
    //console.log("4.x-shouldComponentUpdate", nextProps, this.props);
    return this.props.product !== nextProps.product;
  }

  render() {
    const { product, productClicked } = this.props;
    //console.log("2-render");
    return (
      <div
        style={{
          border: "1px solid",
          margin: 20,
          backgroundColor: "lightgrey",
          padding: 20
        }}
        onClick={() => productClicked(product)}
      >
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
      </div>
    );
  }
}

export default ProductListItem;
