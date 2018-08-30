import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { productsWatcher } from "./saga/product";
const sagaMiddlware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddlware, createLogger)
);

sagaMiddlware.run(productsWatcher);

export default store;
