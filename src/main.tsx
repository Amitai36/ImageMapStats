import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
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
