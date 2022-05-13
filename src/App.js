import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/index";
import Character from "./Components/displayCharacters";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      <Route path="/characters" component={Character} />{" "}
    </Switch>{" "}
  </Router>
);

export default App;
