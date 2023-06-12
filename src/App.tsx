import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/Homepage";
import CuisinePage from "./pages/Cuisines";

function App() {
  return (
    <div className="main-container">
      <HomePage />
      <CuisinePage />
    </div>
  );
}

export default App;
