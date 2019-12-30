import React, { useContext } from "react";

import { FoodContext, Food } from "../../context/food";
import { tableIcons } from "../../utils/table";

import DialogTable from "../table/dialog/Table";
import AddDialog from "./dialogs/Add";
import UpdateDialog from "./dialogs/Update";
import DeleteDialog from "./dialogs/Delete";

const Table = () => {
  const { food, isLoading, dispatch } = useContext(FoodContext);

  const addFood = (newFood: Food) =>
    dispatch({ type: "ADD", payload: newFood });

  const updateFood = (updatedFood: Food) =>
    dispatch({ type: "UPDATE", payload: updatedFood });

  const deleteFood = (deletedFood: Food) =>
    dispatch({ type: "DELETE", payload: deletedFood });

  return (
    <DialogTable
      AddDialog={AddDialog}
      UpdateDialog={UpdateDialog}
      DeleteDialog={DeleteDialog}
      onDelete={deleteFood}
      onUpdate={updateFood}
      onAdd={addFood}
      collection="food"
      title="Your food"
      data={food}
      icons={tableIcons}
      isLoading={isLoading}
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
