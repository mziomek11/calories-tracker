import React, { useState, useEffect } from "react";

import { MealWithFood } from "./Table";
import { toDecimalPlaces } from "../../utils/number";

import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

type Props = {
  meals: MealWithFood[];
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    maxWidth: "100%"
  }
}));

const initialTotal = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  protein: 0
};

const Summary: React.FC<Props> = ({ meals }) => {
  const [total, setTotal] = useState(initialTotal);
  const classes = useStyles();

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
          <div className={classes.root}>
            <Paper {...props} className={classes.paper} />
          </div>
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
        { title: "Fat (g)", field: "fat", type: "numeric" },
        { title: "Carbs (g)", field: "carbohydrates", type: "numeric" },
        { title: "Protein (g)", field: "protein", type: "numeric" }
      ]}
    />
  );
};

export default Summary;
