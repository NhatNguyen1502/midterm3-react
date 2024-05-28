import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`App ${darkMode ? "bg-dark" : ""}`}>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
};
export default App;

