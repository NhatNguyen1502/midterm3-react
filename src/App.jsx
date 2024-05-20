import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
};
export default App;


