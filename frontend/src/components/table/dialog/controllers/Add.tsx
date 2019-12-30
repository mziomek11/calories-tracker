import React, { useContext, useState } from "react";
import { AxiosResponse } from "axios";

import { useFormErrors, useInputFields } from "../../../../hooks";
import { TokenContext } from "../../../../context/token";
import { authPost, hasValidationErrors } from "../../../../utils/http";

import Dialog from "@material-ui/core/Dialog";
import { Column } from "material-table";

import { TableDialogFormControllerProps } from "../models";

type OwnProps = { columns: Column<any>[] };
type Props = TableDialogFormControllerProps & OwnProps;

const Add: React.FC<Props> = ({
  emptyErrors,
  collection,
  onSuccess,
  close,
  columns,
  View
}) => {
  const initFields: { [key: string]: string } = {};
  columns.forEach(({ field }) => (initFields[field as string] = ""));

  const [fields, handleFieldChange] = useInputFields<typeof initFields>(
    initFields
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, updateErrors] = useFormErrors<typeof emptyErrors>(emptyErrors);
  const { token } = useContext(TokenContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    authPost(`/${collection}`, token, fields)
      .then(handleSubmitSuccess)
      .catch(handleSubmitFail);
  };

  const handleSubmitSuccess = (res: AxiosResponse<any>) => {
    const { user, ...rowData } = res.data;
    onSuccess(rowData);
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

export default Add;
