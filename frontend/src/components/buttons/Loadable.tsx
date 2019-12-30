import React from "react";

import Button, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

type OwnProps = {
  loading: boolean;
};

type Props = ButtonProps & OwnProps;

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
  },
  progress: {
    color: theme.palette.primary as any,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

const LoadableButton: React.FC<Props> = ({
  loading,
  children,
  ...buttonProps
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        {...buttonProps}
      >
        {children}
      </Button>
      {loading && <CircularProgress size={24} className={classes.progress} />}
    </div>
  );
};

export default LoadableButton;
