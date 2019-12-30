import React, { useContext, useState } from "react";

import Dialog from "@material-ui/core/Dialog";

import { useFormErrors, useInputFields } from "../../../../hooks";
import { TokenContext } from "../../../../context/token";
import { authPut, hasValidationErrors } from "../../../../utils/http";

import { TableDialogFormControllerProps } from "../models";

type OwnProps = { rowData: any };
type Props = TableDialogFormControllerProps & OwnProps;

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
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useContext(TokenContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <Dialog open onClose={close}>
      <View
        errors={errors}
        fields={fields}
        handleFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Dialog>
  );
};

export default Update;
