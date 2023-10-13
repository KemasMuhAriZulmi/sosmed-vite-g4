import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { globalConfig } from "./redux/reducer/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={globalConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
