import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "@view/Home";
import About from "@view/About";
import Common from '@compoment/Common';

require('./base.scss');

const App = () => (
  <BrowserRouter>
    <Common>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Common>
  </BrowserRouter>
);

ReactDOM.render(
  (<App />),
  document.getElementById("app")
);