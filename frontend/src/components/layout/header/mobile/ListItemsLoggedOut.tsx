import React from "react";

import LoginIcon from "@material-ui/icons/Person";
import RegisterIcon from "@material-ui/icons/PersonAdd";

import ListItem from "./ListItem";

const ListItemsLoggedOut = () => {
  return (
    <>
      <ListItem Icon={LoginIcon} text="Login" redirectLink="/login" />
      <ListItem
        Icon={RegisterIcon}
        text="Create account"
        redirectLink="/register"
      />
    </>
  );
};

export default ListItemsLoggedOut;
