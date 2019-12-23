import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { TokenContext } from "../../context/token";

const ProtectedRoute: React.FC<RouteProps> = props => {
  const { token } = useContext(TokenContext);

  return token ? <Route exact {...props} /> : <Redirect to="/login" />;
};

export default ProtectedRoute;
