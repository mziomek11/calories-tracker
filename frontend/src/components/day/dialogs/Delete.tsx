import React from "react";

import DefaultError from "../../errors/Default";
import FormDialog from "../../dialogs/Form";
import { TableDialogProps } from "../../table/dialog/models";

const Delete: React.FC<TableDialogProps> = ({ errors, ...rest }) => {
  return (
    <FormDialog
      title="
    Are you sure you want to delete this meal?"
      buttonText="Delete"
      {...rest}
    >
      {errors.general && <DefaultError text={errors.general} />}
    </FormDialog>
  );
};

export default Delete;
