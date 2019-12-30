import React from "react";
import { Switch } from "react-router-dom";

import { day, food, login, register, home } from "../../pages";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const PageRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/day/:date" component={day} />
      <ProtectedRoute path="/food" component={food} />
      <PublicRoute path="/login" component={login} />
      <PublicRoute path="/register" component={register} />
      <PublicRoute path="/" component={home} />
    </Switch>
  );
};

export default PageRoutes;
