import React from "react";
import Map from "./Map";
import Camera from "./Camera";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
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
