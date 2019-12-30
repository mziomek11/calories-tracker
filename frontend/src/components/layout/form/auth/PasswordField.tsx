import React from "react";

import ErrorableTextField from "../textfield/Errorable";
import { AuthFieldProps } from "./Form";

const PasswordField: React.FC<AuthFieldProps> = props => {
  return (
    <ErrorableTextField
      fullWidth
      name="password"
      type="password"
      label="Password"
      {...props}
    />
  );
};

export default PasswordField;
