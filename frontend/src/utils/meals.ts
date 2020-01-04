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
    calories: (targetFood.calories * resMeal.weight) / 100,
    fat: (targetFood.fat * resMeal.weight) / 100,
    carbohydrates: (targetFood.carbohydrates * resMeal.weight) / 100,
    protein: (targetFood.protein * resMeal.weight) / 100
  };
}
