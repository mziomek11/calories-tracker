import React from "react";

import FormDialog from "./Form";
import { TableDialogProps } from "../../table/dialog/models";

const Update: React.FC<TableDialogProps> = props => {
  return <FormDialog title="Update meal" buttonText="Update" {...props} />;
};

export default Update;
