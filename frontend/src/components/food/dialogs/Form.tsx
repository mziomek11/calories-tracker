import React from "react";

import ErrorableTextField from "../../errors/TextField";
import ErrorText from "../../errors/Text";
import FormDialog, { FormDialogProps } from "../../dialogs/Form";
import { TableDialogProps } from "../../table/dialog/models";

type Props = TableDialogProps & FormDialogProps;

const inputProps = {
  step: "any"
};

const Form: React.FC<Props> = ({
  errors,
  fields,
  handleFieldChange,
  ...rest
}) => {
  return (
    <FormDialog {...rest}>
      <ErrorableTextField
        name="name"
        value={fields.name}
        onChange={handleFieldChange}
        fullWidth
        label="Name"
        type="text"
        margin="dense"
        err={errors.name}
        autoFocus
      />
      <ErrorableTextField
        name="calories"
        value={fields.calories}
        onChange={handleFieldChange}
        fullWidth
        label="Calories"
        type="number"
        margin="dense"
        err={errors.calories}
        inputProps={inputProps}
      />
      <ErrorableTextField
        name="fat"
        value={fields.fat}
        onChange={handleFieldChange}
        fullWidth
        label="Fat"
        type="number"
        margin="dense"
        err={errors.fat}
        inputProps={inputProps}
      />
      <ErrorableTextField
        name="carbohydrates"
        value={fields.carbohydrates}
        onChange={handleFieldChange}
        fullWidth
        label="Carbs"
        type="number"
        margin="dense"
        err={errors.carbohydrates}
        inputProps={inputProps}
      />
      <ErrorableTextField
        name="protein"
        value={fields.protein}
        onChange={handleFieldChange}
        fullWidth
        label="Protein"
        type="number"
        margin="dense"
        err={errors.protein}
        inputProps={inputProps}
      />
      {errors.general && <ErrorText text={errors.general} />}
    </FormDialog>
  );
};

export default Form;
