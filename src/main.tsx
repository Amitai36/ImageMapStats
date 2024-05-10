import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.Suspense fallback="loading">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </React.Suspense>
  </BrowserRouter>
);
