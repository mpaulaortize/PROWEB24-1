import React from "react";
import ReactDOM from "react-dom/client"; // Agregar importación de ReactDOM
import "./style.css"; // Asumiendo que este archivo contiene estilos CSS para la aplicación
import App from "./Components/App";

// Usar ReactDOM.createRoot en lugar de createRoot
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
