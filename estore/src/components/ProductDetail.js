import React from "react";

function ProductDetail({ match, history, location }) {
  return (
    <div>
      <h1>Product Detail - {match.params.pid}</h1>
      <button onClick={() => history.replace("/offers")}>Go Back</button>
    </div>
  );
}

export default ProductDetail;
