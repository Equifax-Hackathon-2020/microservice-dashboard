import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";

export default function ErrorsPage() {
  return (
    <Switch>
      <Redirect from="/error" exact={true} to="/error/v1" />
      <Route path="/error/v1" component={ErrorPage} />
    </Switch>
  );
}
