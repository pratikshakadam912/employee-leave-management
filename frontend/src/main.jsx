import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "16px",
              background: "#ffffff",
              color: "#0f172a",
              fontWeight: "500",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            },
            success: {
              style: {
                border: "1px solid #10b981",
              },
            },
            error: {
              style: {
                border: "1px solid #ef4444",
              },
            },
          }}
        />

        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
