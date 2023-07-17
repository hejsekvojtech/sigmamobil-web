import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/fonts.css";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
