import React from "react";

import ErrorableTextField from "../textfield/Errorable";
import { AuthFieldProps } from "./Form";

const EmailField: React.FC<AuthFieldProps> = props => {
  return <ErrorableTextField fullWidth name="email" label="Email" {...props} />;
};

export default EmailField;
