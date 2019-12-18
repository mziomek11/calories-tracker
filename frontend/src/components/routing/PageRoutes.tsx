import React from "react";
import { Switch } from "react-router-dom";

import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const PageRoutes = () => {
  return (
    <Switch>
      <PublicRoute path="/login" component={LoginPage} />
      <PublicRoute path="/register" component={RegisterPage} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  );
};

export default PageRoutes;
