import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import About from "./components/pages/About";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;


