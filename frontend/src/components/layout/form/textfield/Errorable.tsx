import React from "react";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";

export type ErrorProps = {
  err: string;
  showHelperText?: boolean;
};

type Props = ErrorProps & TextFieldProps;

const ErrorableTextField: React.FC<Props> = ({
  err,
  showHelperText = true,
  ...rest
}) => {
  return (
    <TextField
      {...rest}
      error={err.length > 0}
      helperText={showHelperText && err}
    />
  );
};

export default ErrorableTextField;
