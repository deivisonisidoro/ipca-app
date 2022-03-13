import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExternalSearch from "./pages/ExternalSearch";
import Home from "./pages/Home";
import InternalSearch from "./pages/InternalSearch";
import PageNotFound from "./pages/PageNotFound";



const Routes = () => (
  <BrowserRouter basename="/index.html">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/busca-externa" component={ExternalSearch} />
      <Route exact path="/busca-interna" component={InternalSearch} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;