import React from "react";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";

type OwnProps = {
  err: string;
};

type Props = OwnProps & TextFieldProps;

const EmailField: React.FC<Props> = ({ err, ...rest }) => {
  return (
    <TextField
      {...rest}
      error={err.length > 0}
      helperText={err}
    />
  );
};

export default EmailField;
