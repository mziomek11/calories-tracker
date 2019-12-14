import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PersonIcon from "@material-ui/icons/Person";

import List, { Props as MobileListProps } from "./MobileList";

const LoggedOutList: React.FC<MobileListProps> = ({ onClick }) => {
  return (
    <List onClick={onClick}>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItem>
    </List>
  );
};

export default LoggedOutList;
