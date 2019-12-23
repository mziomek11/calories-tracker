import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";

import AddBox from "@material-ui/icons/AddBox";

import Caledar from "./calendar/Calendar";

const useStyles = makeStyles(theme => ({
  leftSide: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center"
  }
}));

export default (props: any) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <div className={classes.leftSide}>
        <Caledar />
        <Typography variant="h6">{props.title}</Typography>
      </div>

      <Tooltip title="Add">
        <IconButton
          onClick={props.actions[0].onClick}
          color="inherit"
          aria-label="add item"
        >
          <AddBox />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};
