import React from "react";

import Typography from "@material-ui/core/Typography";

type Props = {
  text: string;
};

const ErrorText: React.FC<Props> = ({ text }) => {
  return (
    <Typography variant="body2" color="error">
      {text}
    </Typography>
  );
};

export default ErrorText;
