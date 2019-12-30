import React from "react";

import MainGrid from "../components/layout/grid/Main";
import FoodTable from "../components/food/Table";

const FoodPage = () => {
  return (
    <MainGrid>
      <FoodTable />
    </MainGrid>
  );
};

export default FoodPage;
