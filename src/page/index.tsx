import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "@view/Home";
import About from "@view/About";
import Common from '@compoment/Common';

const App = () => (
  <Router>
    <Common>
      <Switch>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
          <About />
        </Route>
      </Switch>
    </Common>
  </Router>
);

ReactDOM.render(
  (<App />),
  document.getElementById("app")
);