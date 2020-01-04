import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";

import CalendarIcon from "@material-ui/icons/CalendarToday";

type Props = {
  onOpen: () => void;
};

const Opener: React.FC<Props> = props => {
  return (
    <Tooltip title="Change day">
      <Box
        component={IconButton}
        mr={1}
        color="inherit"
        aria-label="open calendar"
        onClick={props.onOpen}
      >
        <CalendarIcon />
      </Box>
    </Tooltip>
  );
};

export default Opener;
