import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";

import CalendarIcon from "@material-ui/icons/CalendarToday";

type Props = {
  onOpen: () => void;
};

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1)
  }
}));

const Opener: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <Tooltip title="Change day">
      <IconButton
        className={classes.button}
        color="inherit"
        aria-label="open calendar"
        onClick={props.onOpen}
      >
        <CalendarIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Opener;
