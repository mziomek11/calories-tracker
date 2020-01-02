import React, { useState, useEffect, useContext, useCallback } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { useDayParams } from "../../hooks";
import { TokenContext } from "../../context/token";
import { FoodContext, Food } from "../../context/food";
import { tableIcons } from "../../utils/table";
import { reverseDayMonthYear } from "../../utils/date";
import {
  authGet,
  authPost,
  authPut,
  authDelete,
  hasAuthError
} from "../../utils/http";

import DialogTable from "../table/dialog/Table";
import AddDialog from "./dialogs/Add";
import UpdateDialog from "./dialogs/Update";
import DeleteDialog from "./dialogs/Delete";
import Toolbar from "./Toolbar";
import Summary from "./Summary";

type ResponseMeal = {
  id: string;
  food: string;
  weight: number;
};

export type MealWithFood = ResponseMeal & Omit<Food, "name">;
const collection: string = "meals";

const DayTable = () => {
  const [mealsLoading, setMealsLoading] = useState<boolean>(true);
  const [meals, setMeals] = useState<MealWithFood[]>([]);
  const { token, setToken } = useContext(TokenContext);
  const { food, isLoading } = useContext(FoodContext);
  const history = useHistory();
  const params = useDayParams();

  const combineMealWithFood = useCallback(
    (resMeal: ResponseMeal): MealWithFood => {
      const targetFood = food.find(f => f.id === resMeal.food)!;

      return {
        ...resMeal,
        food: targetFood.name,
        calories: (targetFood.calories * resMeal.weight) / 100,
        fat: (targetFood.fat * resMeal.weight) / 100,
        carbohydrates: (targetFood.carbohydrates * resMeal.weight) / 100,
        protein: (targetFood.protein * resMeal.weight) / 100
      };
    },
    [food]
  );

  useEffect(() => {
    if (!moment(params.date).isValid()) {
      history.push("/day");
    } else if (!isLoading) {
      setMealsLoading(true);
      authGet(`/meals?day=${params.date}`, token)
        .then(({ data }) => {
          const mappedMeals = data.meals.map(combineMealWithFood);
          setMeals([...mappedMeals]);
          setMealsLoading(false);
        })
        .catch(err => {
          if (hasAuthError(err)) setToken(null);
          else setMealsLoading(false);
        });
    }
  }, [params.date, token, isLoading, history, setToken, combineMealWithFood]);

  const addMeal = ({ food, weight }: MealWithFood) =>
    new Promise(async (resolve, reject) => {
      try {
        const body = { day: params.date, food, weight };
        const { data } = await authPost(`/${collection}`, token, body);
        const resMeal: ResponseMeal = {
          id: data.id,
          food: data.food,
          weight: data.weight
        };
        const fullMealData = combineMealWithFood(resMeal);
        setMeals(prevMeals => [...prevMeals, fullMealData]);
        resolve();
      } catch (err) {
        reject(err);
      }
    });

  const updateMeal = ({ food, weight, id }: MealWithFood) =>
    new Promise(async (resolve, reject) => {
      try {
        const body = { food, weight, id };
        await authPut(`/${collection}/${id}`, token, body);
        const fullMealData = combineMealWithFood(body);
        setMeals(prevMeals => {
          const newMeals = [...prevMeals];
          const targetIndex = newMeals.findIndex(m => m.id === id);
          newMeals[targetIndex] = fullMealData;
          return newMeals;
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });

  const deleteMeal = ({ id }: MealWithFood) =>
    new Promise(async (resolve, reject) => {
      try {
        await authDelete(`/${collection}/${id}`, token);
        setMeals(prevMeals => prevMeals.filter(meal => meal.id !== id));
        resolve();
      } catch (err) {
        reject(err);
      }
    });

  return (
    <>
      <DialogTable
        AddDialog={AddDialog}
        UpdateDialog={UpdateDialog}
        DeleteDialog={DeleteDialog}
        onAdd={addMeal}
        onUpdate={updateMeal}
        onDelete={deleteMeal}
        title={reverseDayMonthYear(params.date)}
        isLoading={mealsLoading || isLoading}
        data={meals}
        components={{
          Toolbar: Toolbar
        }}
        icons={tableIcons}
        options={{
          search: false,
          paging: false,
          draggable: false
        }}
        columns={[
          { title: "Name", field: "food" },
          { title: "Weight (g)", field: "weight", type: "numeric" },
          { title: "Calories", field: "calories", type: "numeric" },
          { title: "Fat (g)", field: "fat", type: "numeric" },
          { title: "Carbs (g)", field: "carbohydrates", type: "numeric" },
          { title: "Protein (g)", field: "protein", type: "numeric" }
        ]}
        localization={{
          body: {
            emptyDataSourceMessage: "No meals"
          }
        }}
      />

      {meals.length > 0 && <Summary meals={meals} />}
    </>
  );
};

export default DayTable;
