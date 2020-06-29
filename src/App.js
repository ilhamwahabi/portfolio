import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Desc from "./components/Desc/Desc";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <Desc />
    <Work />
    <Footer />
  </div>
);

export default App;
