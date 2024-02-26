import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

const appContainer = document.getElementById("app"); //ClassNote: queryselector se pone # ó . getElementById no. 
const root = createRoot(appContainer);
root.render(<App />);

console.log(appContainer);
