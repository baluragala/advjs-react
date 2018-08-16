import { GET_PRODUCTS } from "../actionTypes/product";

const initialState = {
  products: [],
  productSelectionMessage: "Current selected product : NA"
};
export default function productReducer(prevState = initialState, action) {
  console.log("productReducer", action);
  switch (action.type) {
    case GET_PRODUCTS:
      return {
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

    default:
      return prevState;
  }
}
