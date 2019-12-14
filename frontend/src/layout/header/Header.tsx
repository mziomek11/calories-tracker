import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import Logo from "./Logo";
import DesktopMenu from "./menu/Desktop";
import MobileMenu from "./menu/Mobile";

const Header = () => {
  return (
    <AppBar position="static">
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Toolbar>
            <Logo />
            <DesktopMenu />
            <MobileMenu />
          </Toolbar>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
