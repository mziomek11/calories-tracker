import React from "react";

import Grid from "@material-ui/core/Grid";

type Props = {
  className?: string;
};

const MainGrid: React.FC<Props> = ({ children, className }) => {
  return (
    <Grid className={className} container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        {children}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default MainGrid;
