import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import { DatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core";

type Props = {
  isOpen: boolean;
  onClose: (date: Date) => void;
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const CalendarDialog: React.FC<Props> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState<Date>(new Date());
  const classes = useStyles();

  const handleClose = () => onClose(date);

  return (
    <Dialog className={classes.root} open={isOpen} onClose={handleClose}>
      <div>
        <DatePicker
          disableFuture
          variant="static"
          value={date}
          format="MM/dd/yyyy"
          onChange={setDate as any}
        />
      </div>
    </Dialog>
  );
};

export default CalendarDialog;
