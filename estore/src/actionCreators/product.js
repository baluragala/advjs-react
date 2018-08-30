import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  LOAD_PRODUCTS
} from "../actionTypes/product";

export function getProductsActionCreator() {
  return {
    type: GET_PRODUCTS
  };
}

export function addProductActionCreator(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
}

export function loadProductsActionCreator(products) {
  return {
    type: LOAD_PRODUCTS,
    products
  };
}
