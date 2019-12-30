import React, { useContext } from "react";

import Dialog from "@material-ui/core/Dialog";

import { useFormErrors } from "../../../../hooks";
import { TokenContext } from "../../../../context/token";
import { authDelete, hasValidationErrors } from "../../../../utils/http";

import { ControllerProps, DialogProps } from "../models";

type OwnProps = {
  View: React.ComponentType<DialogProps>;
  rowData: any;
};
type Props = ControllerProps & OwnProps;

const Delete: React.FC<Props> = ({
  rowData,
  collection,
  onSuccess,
  close,
  View
}) => {
  const [errors, updateErrors] = useFormErrors<{}>({});
  const { token } = useContext(TokenContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };

  return (
    <Dialog open onClose={close}>
      <View errors={errors} onSubmit={handleSubmit} />
    </Dialog>
  );
};

export default Delete;
