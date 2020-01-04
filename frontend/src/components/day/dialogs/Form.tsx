import React, { useContext } from "react";

import { FoodContext } from "../../../context/food";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import ErrorableTextField from "../../errors/TextField";
import TextError from "../../errors/Text";
import FormDialog, { FormDialogProps } from "../../dialogs/Form";
import { TableDialogProps } from "../../table/dialog/models";

type Props = TableDialogProps & FormDialogProps;

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: "100%"
  }
}));

const Form: React.FC<Props> = ({
  errors,
  fields,
  handleFieldChange,
  ...rest
}) => {
  const { food } = useContext(FoodContext);
  const classes = useStyles();

  let foodId: string;
  if (!fields.food) foodId = "";
  else if (food.some(f => f.id === fields.food)) foodId = fields.food;
  else {
    foodId = food.find(f => f.name === fields.food)!.id;
    handleFieldChange({ target: { name: "food", value: foodId } } as any);
  }

  return (
    <FormDialog {...rest}>
      <FormControl className={classes.formControl} error={Boolean(errors.food)}>
        <InputLabel>Food</InputLabel>
        <Select name="food" onChange={handleFieldChange as any} value={foodId}>
          {food.map(({ name, id }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
        {errors.food && <FormHelperText>{errors.food}</FormHelperText>}
      </FormControl>
      <ErrorableTextField
        name="weight"
        value={fields.weight}
        onChange={handleFieldChange}
        fullWidth
        label="Weight"
        type="number"
        margin="dense"
        err={errors.weight}
        inputProps={{ step: "any" }}
      />
      {errors.general && <TextError text={errors.general} />}
    </FormDialog>
  );
};

export default Form;
