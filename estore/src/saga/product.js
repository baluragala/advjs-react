import {
  put,
  takeLatest,
  all,
  takeEvery,
  throttle,
  take,
  fork,
  cancel
} from "redux-saga/effects";
import { GET_PRODUCTS, ADD_PRODUCT } from "../actionTypes/product";

function* getProductsFromApi() {
  const response = yield fetch("http://localhost:4000/products");
  const products = yield response.json();
  yield put({ type: "LOAD_PRODUCTS", products });
}

function* getProductsFromApiHelper() {
  let taskId;
  for (;;) {
    yield take(GET_PRODUCTS);
    if (taskId) {
      console.log("cancellig ", taskId);
      yield cancel(taskId);
    }
    taskId = yield fork(getProductsFromApi);
    console.log(taskId);
  }
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
    // throttle(1500, GET_PRODUCTS, getProductsFromApi),
    getProductsFromApiHelper(),
    takeLatest(ADD_PRODUCT, addProductToApi)
  ]);
}
