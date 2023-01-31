
import React from "react";
import "./App.css";
import Table from "./Components/Table"
import Body from "./Components/Body"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { filterProps } from "framer-motion";


function App() {

  return <div className="App">
          <Header />
          <Body />
        </div>;
}

export default App;
