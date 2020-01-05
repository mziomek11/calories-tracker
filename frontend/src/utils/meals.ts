import { toDecimalPlaces } from "./number";
import { ResponseMeal, MealWithFood } from "../pages/day";
import { Food } from "../context/food";

export function combineMealWithFood(
  resMeal: ResponseMeal,
  food: Food[]
): MealWithFood {
  const targetFood = food.find(f => f.id === resMeal.food)!;

  return {
    ...resMeal,
    food: targetFood.name,
    calories: toDecimalPlaces((targetFood.calories * resMeal.weight) / 100, 1),
    fat: toDecimalPlaces((targetFood.fat * resMeal.weight) / 100, 1),
    carbohydrates: toDecimalPlaces(
      (targetFood.carbohydrates * resMeal.weight) / 100,
      1
    ),
    protein: toDecimalPlaces((targetFood.protein * resMeal.weight) / 100, 1)
  };
}
