import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDayParams } from "../../../hooks";
import { dateToISO } from "../../../utils/date";

import Opener from "./Opener";
import Modal from "./Modal";

const Calendar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const history = useHistory();
  const params = useDayParams();

  const handleOpen = () => setOpen(true);
  const handleClose = (date: Date) => {
    const dayMonthYearIso = dateToISO(date);
    if (dayMonthYearIso !== params.date) {
      history.push(`/day/${dayMonthYearIso}`);
    }

    setOpen(false);
  };

  return (
    <div>
      <Opener onOpen={handleOpen} />
      <Modal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default Calendar;
