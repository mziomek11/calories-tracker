import React, { ReactNode, FC, ComponentType } from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

type Props = {
  Icon: ComponentType;
  text: string;
  redirectLink?: string;
  onClick?: VoidFunction;
};

const MobileListItem: FC<Props> = ({ Icon, text, redirectLink, onClick }) => {
  let linkProps: { component?: ReactNode; to?: string } = {};
  if (redirectLink) linkProps = { component: Link, to: redirectLink };

  return (
    <ListItem button {...linkProps} onClick={onClick}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MobileListItem;
