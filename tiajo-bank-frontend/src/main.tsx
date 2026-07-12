import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./app/i18n";

import "./shared/assets/styles/bootstrap.min.css";
import "./shared/assets/styles/bootstrap-icons.min.css";

import "./shared/assets/styles/styles.css";

import "./shared/assets/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);