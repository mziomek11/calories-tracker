import React from "react";
import { EditComponentProps } from "material-table";

import TextField from "@material-ui/core/TextField";

import { Meal } from "./Table";

export default ({ value, onChange }: EditComponentProps<Meal>) => (
  <TextField
    placeholder="Weight"
    type="number"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);
