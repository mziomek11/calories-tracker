import React from "react";

import ErrorText from "../../errors/Text";
import FormDialog from "../../dialogs/Form";
import { TableDialogProps } from "../../table/dialog/models";

const Delete: React.FC<TableDialogProps> = props => {
  return (
    <FormDialog
      title={`Are you sure you want to delete ${props.fields.name}?`}
      contentText="This food will be deleted from each day in
      which it appeared."
      buttonText="Delete"
      {...props}
    >
      {props.errors.general && <ErrorText text={props.errors.general} />}
    </FormDialog>
  );
};

export default Delete;
