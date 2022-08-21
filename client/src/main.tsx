import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import "./assets/styles/font.css";
import { AppProvider } from "./providers/AppProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
