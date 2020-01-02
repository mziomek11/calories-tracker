import React from "react";

import Toolbar, { ToolbarProps } from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";

import AddBox from "@material-ui/icons/AddBox";

import Caledar from "./calendar/Calendar";

const useStyles = makeStyles(() => ({
  leftSide: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center"
  }
}));

export default (props: ToolbarProps) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <div className={classes.leftSide}>
        <Caledar />
        <Typography variant="h6">{props.title}</Typography>
      </div>

      <Tooltip title="Add">
        <IconButton
          onClick={(props as any).actions[0].onClick}
          color="default"
          aria-label="add item"
        >
          <AddBox />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};
