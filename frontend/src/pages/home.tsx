import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import MainGrid from "../components/grid/Main";
import ImageCard from "../components/card/Image";

import shopImage from "../images/shop.png";
import yogaImage from "../images/yoga.png";

const HomePage = () => {
  return (
    <MainGrid>
      <Box mt={2} mb={6} textAlign="center">
        <Typography variant="h3">
          Track your calories with{" "}
          <Box component="span" color="primary.main">
            Logo
          </Box>
        </Typography>
      </Box>

      <Box mb={6}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ImageCard
              primaryText="Get your dream figure"
              secondaryText=" By tracking what and how much do you eat."
              imageSrc={yogaImage}
              imageAlt="person doing yoga"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageCard
              primaryText="Create own food database"
              secondaryText=" And always find the food you need."
              imageSrc={shopImage}
              imageAlt="person with food"
            />
          </Grid>
        </Grid>
      </Box>

      <Box textAlign="center">
        <Box mb={4}>
          <Typography variant="h3">Start today</Typography>
        </Box>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          component={RouterLink}
          to="/register"
        >
          Create account
        </Button>
      </Box>

      <Box component="footer" textAlign="center" mb={6} mt={8}>
        <Typography>
          Created by <Link href="#">Mateusz Ziomek</Link>
        </Typography>
      </Box>
    </MainGrid>
  );
};

export default HomePage;
