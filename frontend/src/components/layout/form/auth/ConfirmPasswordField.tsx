import React from "react";

import ErrorableTextField from "../textfield/Errorable";
import { AuthFieldProps } from "./Form";

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