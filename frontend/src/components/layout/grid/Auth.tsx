import React from "react";

import Grid from "@material-ui/core/Grid";

type Props = {
  className?: string;
};

const AuthGrid: React.FC<Props> = ({ children, className }) => {
  return (
    <Grid className={className} container>
      <Grid item xs={1} sm={2} md={4} />
      <Grid item xs={10} sm={8} md={4}>
        {children}
      </Grid>
      <Grid item xs={1} sm={2} md={4} />
    </Grid>
  );
};

export default AuthGrid;
