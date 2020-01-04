import React from "react";

import ErrorText from "../../errors/Text";
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
      {errors.general && <ErrorText text={errors.general} />}
    </FormDialog>
  );
};

export default Delete;
