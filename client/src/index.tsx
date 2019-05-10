import Dinero from "dinero.js";
import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { initialState } from "./store/initialState";
import { rootReducer } from "./store/rootReducer";

import { Provider } from "react-redux";
const devToolsWindow = window as any;
const enhancer = devToolsWindow.devToolsExtension
  ? devToolsWindow.devToolsExtension()(createStore)
  : createStore;
const store = enhancer(rootReducer, initialState, applyMiddleware(thunk));

Dinero({ amount: 500, currency: "EUR" })
  .convert("PHP", {
    endpoint: "https://api.exchangeratesapi.io/latest",
    propertyPath: "rates.{{to}}"
  })
  .then((dinero) => {
    alert(dinero.getAmount());
  })
  .catch((err) => {
    console.log(err); // handle errors
  });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
