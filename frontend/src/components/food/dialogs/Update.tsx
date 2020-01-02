import React from "react";

import FormDialog from "./Form";
import { TableDialogProps } from "../../table/dialog/models";

const Update: React.FC<TableDialogProps> = props => {
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
