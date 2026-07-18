import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { AccessibilityProvider } from "./shared/components/accessibility/AccessibilityProvider"
import { AccessibilityWidget } from "./shared/components/accessibility/AccessibilityWidget"

import App from "./App"
import "./app/i18n"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import "./shared/assets/styles/styles.css"

const rootElement = document.getElementById("root");

if(!rootElement){
  throw new Error("No se encontró el elemento con id='root'.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccessibilityProvider>
        <App/>
        <AccessibilityWidget/>
      </AccessibilityProvider>
    </BrowserRouter>
  </React.StrictMode>
);