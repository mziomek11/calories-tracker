import React from "react";
import { Link } from "react-router-dom";

import MaterialLink from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const NoFood = () => {
  return (
    <Dialog open={true}>
      <DialogTitle>Add food first</DialogTitle>
      <DialogContent>
        <DialogContentText>
          It looks like you haven't added any food yet. You can do this{" "}
          <Link to="/food" component={MaterialLink}>
            here
          </Link>
          .
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default NoFood;
