import React from "react";

import Toolbar, { ToolbarProps } from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";

import AddBox from "@material-ui/icons/AddBox";

import Caledar from "./calendar/Calendar";

export default (props: ToolbarProps) => {
  return (
    <Toolbar>
      <Box display="flex" flexGrow={1} alignItems="center">
        <Caledar />
        <Typography variant="h6">{props.title}</Typography>
      </Box>

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
