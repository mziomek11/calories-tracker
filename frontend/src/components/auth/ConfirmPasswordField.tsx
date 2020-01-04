import React from "react";

import ErrorableTextField from "../errors/TextField";
import { AuthFieldProps } from "./Form";

const ConfirmPasswordField: React.FC<AuthFieldProps> = props => {
  return (
    <ErrorableTextField
      fullWidth
      name="confirmPassword"
      type="password"
      label="Confirm password"
      margin="dense"
      {...props}
    />
  );
};

export default ConfirmPasswordField;
