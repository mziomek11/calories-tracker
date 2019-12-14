import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  logo: {
    flexGrow: 1
  }
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.logo} variant="h6">
      Logo
    </Typography>
  );
};

export default Logo;
