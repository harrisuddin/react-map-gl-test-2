import React from "react";
import Map from "./Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
