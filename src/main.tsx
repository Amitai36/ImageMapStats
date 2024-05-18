import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.tsx";
import "./i18n.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.Suspense fallback="loading">
        <ToastContainer theme="light" position="bottom-right" />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </React.Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);
