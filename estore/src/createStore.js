import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { productsWatcher } from "./saga/product";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddlware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddlware, createLogger))
);

sagaMiddlware.run(productsWatcher);

export default store;

//yarn add redux-devtools-extension
