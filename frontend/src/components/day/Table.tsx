import React, { useContext } from "react";

import { ResponseMeal, MealWithFood } from "../../pages/day";
import { useDayParams } from "../../hooks";
import { TokenContext } from "../../context/token";
import { FoodContext } from "../../context/food";
import { tableIcons } from "../../utils/table";
import { reverseDayMonthYear } from "../../utils/date";
import { combineMealWithFood } from "../../utils/meals";
import { authPost, authPut, authDelete } from "../../utils/http";

import DialogTable from "../table/dialog/Table";
import AddDialog from "./dialogs/Add";
import UpdateDialog from "./dialogs/Update";
import DeleteDialog from "./dialogs/Delete";
import Toolbar from "./Toolbar";

type Props = {
  mealsLoading: boolean;
  meals: MealWithFood[];
  setMeals: React.Dispatch<React.SetStateAction<MealWithFood[]>>;
};

const collection: string = "meals";

const DayTable: React.FC<Props> = ({ meals, setMeals, mealsLoading }) => {
  const { token } = useContext(TokenContext);
  const fooCtx = useContext(FoodContext);
  const params = useDayParams();

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
        const fullMealData = combineMealWithFood(resMeal, fooCtx.food);
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
        const fullMealData = combineMealWithFood(body, fooCtx.food);
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
    <DialogTable
      AddDialog={AddDialog}
      UpdateDialog={UpdateDialog}
      DeleteDialog={DeleteDialog}
      onAdd={addMeal}
      onUpdate={updateMeal}
      onDelete={deleteMeal}
      title={reverseDayMonthYear(params.date)}
      isLoading={mealsLoading || fooCtx.isLoading}
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
        { title: "Weight(g)", field: "weight", type: "numeric" },
        { title: "Calories", field: "calories", type: "numeric" },
        { title: "Fat(g)", field: "fat", type: "numeric" },
        { title: "Carbs(g)", field: "carbohydrates", type: "numeric" },
        { title: "Protein(g)", field: "protein", type: "numeric" }
      ]}
      localization={{
        body: {
          emptyDataSourceMessage: "No meals"
        }
      }}
    />
  );
};

export default DayTable;
