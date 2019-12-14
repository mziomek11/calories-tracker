import React from "react";

import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

export type Props = {
  onClick: () => void;
};

const useStyles = makeStyles(() => ({
  root: {
    width: 250
  }
}));

const MobileList: React.FC<Props> = ({ onClick, children }) => {
  const classes = useStyles();
  return (
    <List onClick={onClick} className={classes.root}>
      {children}
    </List>
  );
};

export default MobileList;
