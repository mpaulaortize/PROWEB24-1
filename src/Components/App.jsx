//ClassNotes: Siempre nombrar los custom elements de forma camellecase.
import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Body } from "./Body/Body";

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
