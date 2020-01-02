import React, { useContext } from "react";

import { FoodContext, Food } from "../../context/food";
import { TokenContext } from "../../context/token";
import { tableIcons } from "../../utils/table";
import { authPost, authDelete, authPut } from "../../utils/http";

import DialogTable from "../table/dialog/Table";
import AddDialog from "./dialogs/Add";
import UpdateDialog from "./dialogs/Update";
import DeleteDialog from "./dialogs/Delete";

const collection: string = "food";

const Table = () => {
  const { food, isLoading, dispatch } = useContext(FoodContext);
  const { token } = useContext(TokenContext);

  const addFood = (newFood: Food) =>
    new Promise(async (resolve, reject) => {
      try {
        const res = await authPost(`/${collection}`, token, newFood);
        const { user, ...food } = res.data;
        dispatch({ type: "ADD", payload: food });
        resolve();
      } catch (err) {
        reject(err);
      }
    });

  const updateFood = (updatedFood: Food) =>
    new Promise(async (resolve, reject) => {
      try {
        await authPut(`/${collection}/${updatedFood.id}`, token, updatedFood);
        dispatch({ type: "UPDATE", payload: updatedFood });
        resolve();
      } catch (err) {
        reject(err);
      }
    });

  const deleteFood = (deletedFood: Food) =>
    new Promise(async (resolve, reject) => {
      try {
        await authDelete(`/${collection}/${deletedFood.id}`, token);
        dispatch({ type: "DELETE", payload: deletedFood });
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
      onAdd={addFood}
      onUpdate={updateFood}
      onDelete={deleteFood}
      title="Your food"
      data={food}
      icons={tableIcons}
      isLoading={isLoading}
      options={{ draggable: false }}
      columns={[
        {
          title: "Name (100g serving)",
          field: "name",
          defaultSort: "asc",
          customSort: (f1, f2) => f1.name.localeCompare(f2.name)
        },
        {
          title: "Calories",
          field: "calories",
          type: "numeric",
          searchable: false
        },
        {
          title: "Fat (g)",
          field: "fat",
          type: "numeric",
          searchable: false
        },
        {
          title: "Carbs (g)",
          field: "carbohydrates",
          type: "numeric",
          searchable: false
        },
        {
          title: "Protein",
          field: "protein",
          type: "numeric",
          searchable: false
        }
      ]}
    />
  );
};

export default Table;
