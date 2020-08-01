import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RouteRapper from "./components/RouteRapper";
import ScrollToTop from "./components/ScrollTop";
import UrlConstants from "./config/UrlConstants";
import Login from "./components/Login";
import Language from "./components/Language";
import Operations from "./components/Operations";
export class Routes extends Component {
  render() {
    return (
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/language" exact component={Language} />
          <Route path="/language/:id" exact component={Operations} />

          {/* <RouteRapper path="/home" exact component={} />
          <Route path="/newsDetail" exact component={} />

          <Redirect from="/" to="/" /> */}
        </Switch>
      </ScrollToTop>
    );
  }
}
export default Routes;
