import React, { useContext } from "react";

import { TokenContext } from "../../../../context/token";

import LogoutIcon from "@material-ui/icons/Person";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import FoodIcon from "@material-ui/icons/OutdoorGrill";

import ListItem from "./ListItem";

const ListItemsLoggedIn = () => {
  const { setToken } = useContext(TokenContext);
  const logout = () => setToken(null);

  return (
    <>
      <ListItem Icon={CalendarIcon} text="Days" redirectLink="/day" />
      <ListItem Icon={FoodIcon} text="Food" redirectLink="/food" />
      <ListItem Icon={LogoutIcon} text="Logout" onClick={logout} />
    </>
  );
};

export default ListItemsLoggedIn;
