import React, { useState, useContext } from "react";

import { TokenContext } from "../../../../context/token";

import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";

import ListItemsLoggedIn from "./ListItemsLoggedIn";
import ListItemsLoggedOut from "./ListItemsLoggedOut";

const useStyles = makeStyles(() => ({
  list: {
    width: 250
  }
}));

const MobileMenu = () => {
  const classes = useStyles();
  const { token } = useContext(TokenContext);
  const [open, setOpen] = useState<boolean>(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Hidden smUp>
      <IconButton onClick={openDrawer} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        <List onClick={closeDrawer} className={classes.list}>
          {token ? <ListItemsLoggedIn /> : <ListItemsLoggedOut />}
        </List>
      </SwipeableDrawer>
    </Hidden>
  );
};

export default MobileMenu;
