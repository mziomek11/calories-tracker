import React, { useState } from "react";

import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import MenuIcon from "@material-ui/icons/Menu";

import LoggedInList from "../moblie-list/LoggedIn";
import LoggedOutList from "../moblie-list/LoggedOut";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Hidden smUp>
      <MenuIcon onClick={openDrawer} />
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        <LoggedOutList onClick={closeDrawer} />
      </SwipeableDrawer>
    </Hidden>
  );
};

export default MobileMenu;
