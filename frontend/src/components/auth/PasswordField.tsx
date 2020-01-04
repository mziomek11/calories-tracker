import React from "react";

import ErrorableTextField from "../errors/TextField";
import { AuthFieldProps } from "./Form";

const PasswordField: React.FC<AuthFieldProps> = props => {
  return (
    <ErrorableTextField
      fullWidth
      name="password"
      type="password"
      label="Password"
      margin="dense"
      {...props}
    />
  );
};

export default PasswordField;
