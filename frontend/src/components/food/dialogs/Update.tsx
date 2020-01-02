import React, { useRef } from "react";

import FormDialog from "./Form";
import { TableDialogProps } from "../../table/dialog/models";

const Update: React.FC<TableDialogProps> = props => {
  const foodName = useRef<string>(props.fields.name);
  return (
    <FormDialog
      title={`Update ${foodName.current}`}
      contentText="Information about this food will be changed for each day in
    which it appeared."
      buttonText="Update"
      {...props}
    />
  );
};

export default Update;
