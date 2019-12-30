import React from "react";

import FormDialog from "./Form";
import { TableFormDialogProps } from "../../table/dialog/models";

const Add: React.FC<TableFormDialogProps> = props => {
  return <FormDialog title="Add food" buttonText="Add" {...props} />;
};

export default Add;
