import React from "react";

import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";

const DesktopMenu = () => {
  return (
    <Hidden xsDown>
      <Button color="inherit">Login</Button>
    </Hidden>
  );
};

export default DesktopMenu;
