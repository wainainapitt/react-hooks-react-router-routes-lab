import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
 
  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/directors">
          <Directors />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/actors">
          <Actors />
        </Route>
      </Switch>
    </div>
  );
}

export default App;