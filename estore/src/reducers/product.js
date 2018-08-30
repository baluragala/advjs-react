import {
  GET_PRODUCTS,
  TITLE_CHANGE,
  PRICE_CHANGE,
  CATEGORY_CHANGE,
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS
} from "../actionTypes/product";

const initialState = {
  products: [],
  productSelectionMessage: "Current selected product : NA",
  users: [],
  offers: [],
  sales: [],
  title: "pixel 3",
  price: 1000,
  category: "ELECTRONICS"
};
export default function productReducer(prevState = initialState, action) {
  console.log(
    `4-productReducer - Action reaches reducer for a state change with action ${JSON.stringify(
      action
    )} and prevState ${JSON.stringify(prevState)}`
  );
  switch (action.type) {
    case GET_PRODUCTS:
      const newState = {
        ...prevState
      };

      console.log(
        `5-productReducer - reducer makes state change and new state is ${JSON.stringify(
          newState
        )}`
      );
      return newState;
    case TITLE_CHANGE:
      return { ...prevState, title: action.title };
    case PRICE_CHANGE:
      return { ...prevState, price: action.price };
    case CATEGORY_CHANGE:
      return { ...prevState, category: action.category };
    case LOAD_PRODUCTS:
      return { ...prevState, products: action.products };
    case ADD_PRODUCT:
      return { ...prevState, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...prevState, product: action.product, isLoading: false };
    default:
      return prevState;
  }
}
