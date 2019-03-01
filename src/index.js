import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./common/configStore";
import App from "./container/App";
import "./index.css";

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
