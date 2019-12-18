import React from "react";

import ErrorableTextField from "../ErrorableTextField";
import { AuthFieldProps } from "./models";

const ConfirmPasswordField: React.FC<AuthFieldProps> = props => {
  return (
    <ErrorableTextField
      fullWidth
      name="confirmPassword"
      type="password"
      label="Confirm password"
      {...props}
    />
  );
};

export default ConfirmPasswordField;
