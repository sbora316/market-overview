import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StockDataProvider } from "./StockDataContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <StockDataProvider>
        <App />
      </StockDataProvider>
    </BrowserRouter>
  </StrictMode>,
);
