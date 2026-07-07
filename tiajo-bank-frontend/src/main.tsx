import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./app/i18n";

import "./shared/assets/styles/bootstrap.min.css";
import "./shared/assets/styles/bootstrap-icons.min.css";
import "./shared/assets/styles/styles.css";

import "./shared/assets/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);