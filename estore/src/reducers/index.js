import { combineReducers } from "redux";
import productReducer from "./product";
import offersReducer from "./offers";

const rootReducer = combineReducers({
  productState: productReducer,
  offersState: offersReducer
});

export default rootReducer;
