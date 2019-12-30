import React, { useContext } from "react";

import { TokenContext } from "../../../../context/token";
import { dateToDayMonthYearIso } from "../../../../utils/date";

import MenuItem from "./MenuItem";

const MenuItemsLoggedIn = () => {
  const { setToken } = useContext(TokenContext);
  const logout = () => setToken(null);

  return (
    <>
      <MenuItem
        text="Days"
        redirectLink={`/day/${dateToDayMonthYearIso(new Date())}`}
      />
      <MenuItem text="Food" redirectLink="/food" />
      <MenuItem text="Logout" onClick={logout} />
    </>
  );
};

export default MenuItemsLoggedIn;
