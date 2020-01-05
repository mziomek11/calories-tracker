import React from "react";

import MainGrid from "../components/grid/Main";
import FoodTable from "../components/food/Table";

const FoodPage = () => {
  return (
    <MainGrid component="main">
      <FoodTable />
    </MainGrid>
  );
};

export default FoodPage;
