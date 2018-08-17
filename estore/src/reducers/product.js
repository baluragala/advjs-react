import {
  GET_PRODUCTS,
  TITLE_CHANGE,
  PRICE_CHANGE,
  CATEGORY_CHANGE
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
        ...prevState,
        products: [
          {
            id: 1,
            title: "iphone x",
            price: 2000
          },
          {
            id: 2,
            title: "pixel xl",
            price: 1200
          },
          {
            id: 3,
            title: "note 7",
            price: 1000
          },
          {
            id: 4,
            title: "MI note",
            price: 600
          }
        ]
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

    default:
      return prevState;
  }
}
