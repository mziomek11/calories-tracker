import React from "react";

import FormDialog from "./Form";
import { TableFormDialogProps } from "../../table/dialog/models";

const Update: React.FC<TableFormDialogProps> = props => {
  return (
    <FormDialog
      title="Update food"
      contentText="Warning: information about this food will be changed for each day in
    which it appeared"
      buttonText="Update"
      {...props}
    />
  );
};

export default Update;
