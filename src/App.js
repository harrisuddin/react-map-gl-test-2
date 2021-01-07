import React from "react";
import Map from "./Map";
import Camera from "./Camera";
import Container from "./components/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/container">
          <Container />
        </Route>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/">
          <Camera />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
