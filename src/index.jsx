import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SpeedInsightsWrapper from "./components/SpeedInsightsWrapper";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SpeedInsightsWrapper />
  </React.StrictMode>
); 