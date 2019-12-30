import React, { useContext } from "react";

import Dialog from "@material-ui/core/Dialog";

import { useFormErrors, useInputFields } from "../../../../hooks";
import { TokenContext } from "../../../../context/token";
import { authPut, hasValidationErrors } from "../../../../utils/http";

import { FormControllerProps } from "../models";

type OwnProps = { rowData: any };
type Props = FormControllerProps & OwnProps;

const Update: React.FC<Props> = ({
  rowData,
  emptyErrors,
  collection,
  onSuccess,
  close,
  View
}) => {
  const [fields, handleFieldChange] = useInputFields<typeof rowData>(rowData);
  const [errors, updateErrors] = useFormErrors<typeof emptyErrors>(emptyErrors);
  const { token } = useContext(TokenContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authPut(`/${collection}/${rowData.id}`, token, fields)
      .then(handleSubmitSuccess)
      .catch(handleSubmitFail);
  };

  const handleSubmitSuccess = () => {
    onSuccess({ id: rowData.id, ...fields });
    close();
  };

  const handleSubmitFail = (err: any) => {
    if (hasValidationErrors(err)) updateErrors(err.response.data.errors);
  };

  return (
    <Dialog open onClose={close}>
      <View
        errors={errors}
        fields={fields}
        handleFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
      />
    </Dialog>
  );
};

export default Update;
