import React from "react";
import { EditComponentProps } from "material-table";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Meal } from "./Table";

export default ({ value, onChange }: EditComponentProps<Meal>) => (
  <Select value={value} onChange={e => onChange(e.target.value)}>
    <MenuItem value="Milk">Milk</MenuItem>
    <MenuItem value="Ham">Ham</MenuItem>
    <MenuItem value="Bread">Bread</MenuItem>
  </Select>
);
