import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";

import MainGrid from "../grid/Main";
import Logo from "./Logo";
import DesktopMenu from "./desktop/Menu";
import MobileMenu from "./mobile/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4)
  },
  toolbar: {
    justifyContent: "space-between"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <MainGrid>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <div>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </Toolbar>
      </MainGrid>
    </AppBar>
  );
};

export default Header;
