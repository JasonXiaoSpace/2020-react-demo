import React from "react";
import "./index.css";
import MainApp from "./components/MainApp";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <MainApp></MainApp>{" "}
  </Provider>
);
