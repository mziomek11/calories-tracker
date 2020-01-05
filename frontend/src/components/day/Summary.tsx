import React, { useState, useEffect } from "react";

import { MealWithFood } from "../../pages/day";
import { toDecimalPlaces } from "../../utils/number";

import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

type Props = {
  meals: MealWithFood[];
};

const initialTotal = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  protein: 0
};

const Summary: React.FC<Props> = ({ meals }) => {
  const [total, setTotal] = useState(initialTotal);

  useEffect(() => {
    const newTotal = meals.reduce(
      (prev, curr) => ({
        calories: prev.calories + curr.calories,
        fat: prev.fat + curr.fat,
        carbohydrates: prev.carbohydrates + curr.carbohydrates,
        protein: prev.protein + curr.protein
      }),
      initialTotal
    );

    const decimalRoundedTotal = {
      calories: toDecimalPlaces(newTotal.calories, 1),
      fat: toDecimalPlaces(newTotal.fat, 1),
      carbohydrates: toDecimalPlaces(newTotal.carbohydrates, 1),
      protein: toDecimalPlaces(newTotal.protein, 1)
    };

    setTotal(decimalRoundedTotal);
  }, [meals]);

  return (
    <MaterialTable
      data={[{ name: "Total", ...total }]}
      options={{
        search: false,
        paging: false,
        sorting: false,
        draggable: false
      }}
      components={{
        Toolbar: () => null,
        Container: props => (
          <Box display="flex" justifyContent="center">
            <Box component={Paper} my={3} maxWidth="100%" {...props} />
          </Box>
        )
      }}
      columns={[
        {
          title: "",
          field: "name",
          cellStyle: {
            fontWeight: "bold"
          }
        },
        { title: "Calories", field: "calories", type: "numeric" },
        { title: "Fat(g)", field: "fat", type: "numeric" },
        { title: "Carbs(g)", field: "carbohydrates", type: "numeric" },
        { title: "Protein(g)", field: "protein", type: "numeric" }
      ]}
    />
  );
};

export default Summary;
