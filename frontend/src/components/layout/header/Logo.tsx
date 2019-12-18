import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";

const Logo = () => {
  return (
    <Link
      color="inherit"
      variant="h6"
      underline="none"
      component={RouterLink}
      to="/"
    >
      Logo
    </Link>
  );
};

export default Logo;
