import { put, takeLatest, all } from "redux-saga/effects";
import { GET_PRODUCTS, ADD_PRODUCT } from "../actionTypes/product";

function* getProductsFromApi() {
  const response = yield fetch("http://localhost:4000/products");
  const products = yield response.json();
  yield put({ type: "LOAD_PRODUCTS", products });
}

function* addProductToApi(action) {
  const response = yield fetch("http://localhost:4000/products", {
    method: "POST",
    body: JSON.stringify(action.product),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const product = yield response.json();
  yield put({ type: "ADD_PRODUCT_SUCCESS", product });
}

export function* productsWatcher() {
  yield all([
    takeLatest(GET_PRODUCTS, getProductsFromApi),
    takeLatest(ADD_PRODUCT, addProductToApi)
  ]);
}
