import React from "react";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import WorldMap from "./components/WorldMap";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
