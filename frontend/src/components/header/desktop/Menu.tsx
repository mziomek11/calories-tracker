import React, { useContext } from "react";

import { TokenContext } from "../../../context/token";

import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core";

import MenuItemsLoggedIn from "./MenuItemsLoggedIn";
import MenuItemsLoggedOut from "./MenuItemsLoggedOut";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1)
    }
  }
}));

const DesktopMenu = () => {
  const { token } = useContext(TokenContext);
  const classes = useStyles();

  return (
    <Hidden xsDown>
      <div className={classes.root}>
        {token ? <MenuItemsLoggedIn /> : <MenuItemsLoggedOut />}
      </div>
    </Hidden>
  );
};

export default DesktopMenu;
