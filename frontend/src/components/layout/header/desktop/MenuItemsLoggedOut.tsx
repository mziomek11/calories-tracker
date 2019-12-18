import React from "react";

import MenuItem from "./MenuItem";

const MenuItemsLoggedOut = () => {
  return (
    <>
      <MenuItem text="Login" redirectLink="/login" />
      <MenuItem text="Register" redirectLink="/register" />
    </>
  );
};

export default MenuItemsLoggedOut;
