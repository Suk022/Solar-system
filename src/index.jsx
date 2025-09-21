import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SpeedInsightsWrapper from "./components/SpeedInsightsWrapper";
import { Analytics } from "@vercel/analytics/react";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SpeedInsightsWrapper />
    <Analytics />
  </React.StrictMode>
); 