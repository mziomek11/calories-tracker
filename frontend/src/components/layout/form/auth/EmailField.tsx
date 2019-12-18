import React from "react";

import ErrorableTextField from "../ErrorableTextField";
import { AuthFieldProps } from "./models";

const EmailField: React.FC<AuthFieldProps> = props => {
  return <ErrorableTextField fullWidth name="email" label="Email" {...props} />;
};

export default EmailField;
