import React, { useState, useEffect } from "react";

import { useDayParams } from "../../hooks";
import { tableIcons } from "../../utils/table";

import MaterialTable from "material-table";

import Toolbar from "./Toolbar";
import FoodController from "./FoodController";
import WeightController from "./WeightController";

export type Meal = {
  id: string;
  food: string;
  weight: number;
  calories: number;
  fat: number;
  carbohydrates: number;
  protein: number;
};

const fakeMeals: Meal[] = [
  {
    id: "1",
    food: "Milk",
    weight: 250,
    calories: 100,
    fat: 20,
    carbohydrates: 4,
    protein: 15
  },
  {
    id: "2",
    food: "Ham",
    weight: 100,
    calories: 70,
    fat: 12,
    carbohydrates: 8,
    protein: 12
  },
  {
    id: "3",
    food: "Bread",
    weight: 400,
    calories: 600,
    fat: 8,
    carbohydrates: 140,
    protein: 12
  }
];

const Table = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [meals, setMeals] = useState<Meal[]>(fakeMeals);
  const params = useDayParams();

  useEffect(() => {
    setLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000);
    }).then(res => setLoading(false));
  }, [params.date]);

  const handleRowAdd = (newMeal: Meal): Promise<void> => {
    return new Promise((resolve, reject) => {
      setMeals(oldMeals => [
        ...oldMeals,
        {
          calories: 123,
          fat: 5,
          carbohydrates: 10,
          protein: 30,
          food: "Unnamed",
          weight: 0,
          ...newMeal
        }
      ]);
      resolve();
    });
  };

  const handleRowUpdate = (updatedMeal: any): Promise<void> => {
    return new Promise((resolve, reject) => {
      setMeals(oldMeals => {
        const newMeals = [...oldMeals];
        const targetIndex = newMeals.findIndex(
          meal => meal.id === updatedMeal.id
        );
        newMeals[targetIndex] = { ...updatedMeal };

        return newMeals;
      });

      resolve();
    });
  };

  const handleRowDelete = (deletedMeal: Meal): Promise<void> => {
    return new Promise((resolve, reject) => {
      setMeals(oldMeals => oldMeals.filter(meal => meal.id !== deletedMeal.id));
      resolve();
    });
  };

  return (
    <MaterialTable
      title={params.date}
      isLoading={isLoading}
      data={meals}
      editable={{
        onRowAdd: handleRowAdd,
        onRowUpdate: handleRowUpdate,
        onRowDelete: handleRowDelete
      }}
      components={{
        Toolbar: Toolbar
      }}
      icons={tableIcons}
      options={{
        paging: false,
        search: false
      }}
      columns={[
        {
          title: "Food",
          field: "food",
          editComponent: FoodController
        },
        {
          title: "Weight",
          field: "weight",
          type: "numeric",
          editComponent: WeightController
        },
        {
          title: "Calories",
          field: "calories",
          type: "numeric",
          editable: "never"
        },
        { title: "Fat", field: "fat", type: "numeric", editable: "never" },
        {
          title: "Carbs",
          field: "carbohydrates",
          type: "numeric",
          editable: "never"
        },
        {
          title: "Protein",
          field: "protein",
          type: "numeric",
          editable: "never"
        }
      ]}
    />
  );
};

export default Table;
