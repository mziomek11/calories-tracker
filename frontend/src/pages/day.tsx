import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { Food, FoodContext } from "../context/food";
import { TokenContext } from "../context/token";
import { useDayParams } from "../hooks";
import { authGet, hasAuthError } from "../utils/http";
import { combineMealWithFood } from "../utils/meals";

import MainGrid from "../components/grid/Main";
import DayTable from "../components/day/Table";
import DaySummary from "../components/day/Summary";
import NoFoodDialog from "../components/day/dialogs/NoFood";

export type ResponseMeal = {
  id: string;
  food: string;
  weight: number;
};

export type MealWithFood = ResponseMeal & Omit<Food, "name">;

const DayPage = () => {
  const [mealsLoading, setMealsLoading] = useState<boolean>(false);
  const [meals, setMeals] = useState<MealWithFood[]>([]);
  const { food, isLoading } = useContext(FoodContext);
  const { token, setToken } = useContext(TokenContext);
  const history = useHistory();
  const params = useDayParams();

  useEffect(() => {
    if (!moment(params.date).isValid()) {
      history.push("/api/day");
    } else if (!isLoading) {
      if (food.length === 0) return;
      setMealsLoading(true);
      authGet(`/api/meals?day=${params.date}`, token)
        .then(({ data }) => {
          const mappedMeals = data.meals.map((m: ResponseMeal) =>
            combineMealWithFood(m, food)
          );
          setMeals([...mappedMeals]);
          setMealsLoading(false);
        })
        .catch(err => {
          if (hasAuthError(err)) setToken(null);
          else setMealsLoading(false);
        });
    }
  }, [params.date, token, isLoading, history, setToken, food]);

  return (
    <MainGrid component="main">
      <DayTable mealsLoading={mealsLoading} meals={meals} setMeals={setMeals} />
      {meals.length > 0 && <DaySummary meals={meals} />}
      {!isLoading && food.length === 0 && <NoFoodDialog />}
    </MainGrid>
  );
};

export default DayPage;
