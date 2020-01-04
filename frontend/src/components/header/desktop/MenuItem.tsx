import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

type Props = {
  text: string;
  redirectLink?: string;
  onClick?: VoidFunction;
};

const MenuItem: React.FC<Props> = ({ text, redirectLink, onClick }) => {
  let linkProps: { component?: ReactNode; to?: string } = {};
  if (redirectLink) linkProps = { component: Link, to: redirectLink };

  return (
    <Button color="inherit" {...linkProps} onClick={onClick}>
      {text}
    </Button>
  );
};

export default MenuItem;
