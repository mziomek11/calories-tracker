import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useReducer
} from "react";

import { TokenContext } from "./token";
import { authGet } from "../utils/http";

type Context = {
  isLoading: boolean;
  food: Food[];
  dispatch: React.Dispatch<Action>;
};

export type Food = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbohydrates: number;
  protein: number;
};

type Action =
  | { type: "ADD" | "UPDATE" | "DELETE"; payload: Food }
  | { type: "REPLACE"; payload: Food[] };

const sortFoodFn = (f1: Food, f2: Food) => f1.name.localeCompare(f2.name);

const reducer = (state: Food[], action: Action): Food[] => {
  switch (action.type) {
    case "REPLACE":
      return action.payload;
    case "ADD":
      return [...state, action.payload].sort(sortFoodFn);
    case "UPDATE":
      const newFood = [...state];
      const index = newFood.findIndex(food => food.id === action.payload.id);
      newFood[index] = { ...action.payload };
      return newFood.sort(sortFoodFn);
    case "DELETE":
      return state.filter(food => food.id !== action.payload.id);
    default:
      return state;
  }
};

export const FoodContext = createContext<Context>({
  isLoading: true,
  food: [],
  dispatch: () => new Error("Should be inside provider")
});

export const FoodProvider: React.FC = ({ children }) => {
  const [food, dispatch] = useReducer(reducer, []);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    if (token) {
      setLoading(true);
      authGet("/food", token)
        .then(res => dispatch({ type: "REPLACE", payload: res.data.food }))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    } else dispatch({ type: "REPLACE", payload: [] });
  }, [token]);

  const contextValue = { food, dispatch, isLoading };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};
