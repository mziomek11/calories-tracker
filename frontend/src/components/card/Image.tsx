import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";

type Props = {
  imageSrc: string;
  imageAlt: string;
  primaryText?: string;
  secondaryText?: string;
};

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    height: "auto"
  }
}));

const ImageCard: React.FC<Props> = ({
  imageAlt,
  imageSrc,
  primaryText = "",
  secondaryText = ""
}) => {
  const classes = useStyles();

  return (
    <Box component={Card} display="flex" textAlign="center" height="100%">
      <CardContent>
        <Box width={1 / 2} m="auto">
          <img className={classes.image} src={imageSrc} alt={imageAlt} />
        </Box>
        <Typography variant="h5" color="primary">
          {primaryText}
        </Typography>
        <Typography>{secondaryText}</Typography>
      </CardContent>
    </Box>
  );
};

export default ImageCard;
