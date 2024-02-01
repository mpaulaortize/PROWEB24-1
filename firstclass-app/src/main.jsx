import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const appCotainer = document.getElementById("app"); //QuerySelector es con un #, pero funciona igual.
const root = createRoot(appCotainer); //Estamos creando un root a partir del elemento

//Crear el componente
//Componente con CammelCase

root.render(<App />); //Hacemos que se muestre el componente.
console.log(appCotainer);
