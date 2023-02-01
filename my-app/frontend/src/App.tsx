
import React from "react";
import "./App.css";
import { filterProps } from "framer-motion";
import GraphView from "./views/GraphView";
import Login from "./views/Login";
import TableView from "./views/TableView";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//Link is using to send user to differnt rountes. ex:  <li> <Link to="/">Home <li>


function App() {

  return (
      <Router>

        <div className="App">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/tables" element={<TableView />}></Route>
            <Route path="/graphs" element={<GraphView />}></Route>
          </Routes>
        </div>
      </Router>
     
        )
}

export default App;
