import React from "react";

import ErrorableTextField from "../../layout/form/textfield/Errorable";
import DefaultError from "../../errors/Default";
import FormDialog, { FormDialogProps } from "../../dialogs/Form";
import { TableFormDialogProps } from "../../table/dialog/models";

type Props = TableFormDialogProps & FormDialogProps;

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
        label="Calories/100g"
        type="number"
        margin="dense"
        err={errors.calories}
      />
      <ErrorableTextField
        name="fat"
        value={fields.fat}
        onChange={handleFieldChange}
        fullWidth
        label="Fat/100g"
        type="number"
        margin="dense"
        err={errors.fat}
      />
      <ErrorableTextField
        name="carbohydrates"
        value={fields.carbohydrates}
        onChange={handleFieldChange}
        fullWidth
        label="Carbs/100g"
        type="number"
        margin="dense"
        err={errors.carbohydrates}
      />
      <ErrorableTextField
        name="protein"
        value={fields.protein}
        onChange={handleFieldChange}
        fullWidth
        label="Protein/100g"
        type="number"
        margin="dense"
        err={errors.protein}
      />
      {errors.general && <DefaultError text={errors.general} />}
    </FormDialog>
  );
};

export default Form;
