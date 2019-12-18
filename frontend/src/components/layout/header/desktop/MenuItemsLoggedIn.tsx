import React, { useContext } from "react";

import { TokenContext } from "../../../../context/token";

import MenuItem from "./MenuItem";

const MenuItemsLoggedIn = () => {
  const { setToken } = useContext(TokenContext);
  const logout = () => setToken(null);

  return (
    <>
      <MenuItem text="Logout" onClick={logout} />
    </>
  );
};

export default MenuItemsLoggedIn;
