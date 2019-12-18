import React, { useContext } from "react";

import { TokenContext } from "../../../../context/token";

import LogoutIcon from "@material-ui/icons/Person";

import ListItem from "./ListItem";

const ListItemsLoggedIn = () => {
  const { setToken } = useContext(TokenContext);
  const logout = () => setToken(null);

  return (
    <>
      <ListItem Icon={LogoutIcon} text="Logout" onClick={logout} />
    </>
  );
};

export default ListItemsLoggedIn;
