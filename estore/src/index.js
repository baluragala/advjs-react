import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import appStore from "./createStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
