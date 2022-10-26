import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {store} from './redux';
import { Provider } from "react-redux";
import ScrollToTop from './ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
    <ScrollToTop>
      <App />
      </ScrollToTop>

    </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
