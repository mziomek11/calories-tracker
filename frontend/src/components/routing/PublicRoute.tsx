import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { dateToDayMonthYearIso } from "../../utils/date";
import { TokenContext } from "../../context/token";

const PublicRoute: React.FC<RouteProps> = props => {
  const { token } = useContext(TokenContext);

  return !token ? (
    <Route exact {...props} />
  ) : (
    <Redirect to={`/day/${dateToDayMonthYearIso(new Date())}`} />
  );
};

export default PublicRoute;
