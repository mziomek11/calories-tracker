import React from "react";

import ErrorableTextField from "../ErrorableTextField";
import { AuthFieldProps } from "./models";

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
