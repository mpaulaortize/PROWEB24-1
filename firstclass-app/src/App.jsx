import React from "react";

import { HeaderApp } from "./components/HeaderApp/HeaderApp";
import { BodyApp } from "./components/BodyApp/BodyApp";
import { FooterApp } from "./components/FooterApp/FooterApp";

export default function App() {
  return (
    <div>
      <HeaderApp />
      <BodyApp />
      <FooterApp />
    </div>
  );
  //Se tiene que encapsular en un div, y se debe llamar desde el app con las etiquetas.
}
