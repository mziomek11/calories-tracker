import React, { useContext, useState } from "react";

import { useFormErrors } from "../../../../hooks";
import { TokenContext } from "../../../../context/token";
import { authDelete, hasValidationErrors } from "../../../../utils/http";

import Dialog from "@material-ui/core/Dialog";

import { TableDialogControllerProps, TableDialogProps } from "../models";

type OwnProps = {
  View: React.ComponentType<TableDialogProps>;
  rowData: any;
};
type Props = TableDialogControllerProps & OwnProps;

const Delete: React.FC<Props> = ({
  rowData,
  collection,
  onSuccess,
  close,
  View
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, updateErrors] = useFormErrors<{}>({});
  const { token } = useContext(TokenContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    authDelete(`/${collection}/${rowData.id}`, token)
      .then(handleSubmitSuccess)
      .catch(handleSubmitFail);
  };

  const handleSubmitSuccess = () => {
    onSuccess({ ...rowData });
    close();
  };

  const handleSubmitFail = (err: any) => {
    if (hasValidationErrors(err)) updateErrors(err.response.data.errors);
    setLoading(false);
  };

  return (
    <Dialog open onClose={close}>
      <View errors={errors} onSubmit={handleSubmit} loading={loading} />
    </Dialog>
  );
};

export default Delete;
