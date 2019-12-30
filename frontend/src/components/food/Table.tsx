import React, { useState, useEffect, useContext } from "react";

import { authGet } from "../../utils/http";
import { TokenContext } from "../../context/token";
import { tableIcons } from "../../utils/table";

import DialogTable from "../table/dialog/Table";
import AddDialog from "./dialogs/Add";
import UpdateDialog from "./dialogs/Update";
import DeleteDialog from "./dialogs/Delete";

export type Food = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbohydrates: number;
  protein: number;
};

const Table = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [food, setFood] = useState<Food[]>([]);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    authGet("/food", token).then(res => {
      setFood(res.data.food);
      setLoading(false);
    });
  }, [token]);

  const handleAdd = (newFood: Food) => {
    setFood(prevFood => [...prevFood, newFood]);
  };

  const handleUpdate = (updatedFood: Food) => {
    setFood(prevFood => {
      const newMeals = [...prevFood];
      const targetIndex = newMeals.findIndex(
        food => food.id === updatedFood.id
      );
      newMeals[targetIndex] = { ...updatedFood };

      return newMeals;
    });
  };

  const handleDelete = (deletedFood: Food) => {
    setFood(prevFood => prevFood.filter(food => food.id !== deletedFood.id));
  };

  return (
    <DialogTable
      AddDialog={AddDialog}
      UpdateDialog={UpdateDialog}
      DeleteDialog={DeleteDialog}
      onDelete={handleDelete}
      onUpdate={handleUpdate}
      onAdd={handleAdd}
      collection="food"
      isLoading={isLoading}
      title="Your food"
      data={food}
      icons={tableIcons}
      columns={[
        {
          title: "Name",
          field: "name",
          defaultSort: "asc",
          customSort: (f1, f2) => f1.name.localeCompare(f2.name)
        },
        {
          title: "Calories/100g",
          field: "calories",
          type: "numeric",
          searchable: false
        },
        {
          title: "Fat/100g",
          field: "fat",
          type: "numeric",
          searchable: false
        },
        {
          title: "Carbs/100g",
          field: "carbohydrates",
          type: "numeric",
          searchable: false
        },
        {
          title: "Protein/100g",
          field: "protein",
          type: "numeric",
          searchable: false
        }
      ]}
    />
  );
};

export default Table;
