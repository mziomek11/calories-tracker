import React from "react";

import FormDialog from "./Form";
import { TableDialogProps } from "../../table/dialog/models";

const Add: React.FC<TableDialogProps> = props => {
  return <FormDialog title="Add meal" buttonText="Add" {...props} />;
};

export default Add;
