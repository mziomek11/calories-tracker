import React, { useContext } from "react";

import { TokenContext } from "../../../context/token";

import Box from "@material-ui/core/Box";

import MenuItemsLoggedIn from "./MenuItemsLoggedIn";
import MenuItemsLoggedOut from "./MenuItemsLoggedOut";

const DesktopMenu = () => {
  const { token } = useContext(TokenContext);

  return (
    <Box display={{ xs: "none", sm: "flex" }} justifyContent="space-between">
      {token ? <MenuItemsLoggedIn /> : <MenuItemsLoggedOut />}
    </Box>
  );
};

export default DesktopMenu;
