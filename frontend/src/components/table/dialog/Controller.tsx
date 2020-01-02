import React, { useState } from "react";

import { useFormErrors, useInputFields } from "../../../hooks";
import { hasValidationErrors } from "../../../utils/http";
import { TableDialogProps } from "./models";

import Dialog from "@material-ui/core/Dialog";

type Props = {
  onSubmit: (obj: any) => Promise<any>;
  close: VoidFunction;
  emptyErrors: { [key: string]: string };
  View: React.ComponentType<TableDialogProps>;
  initialFields: { [key: string]: any };
};

const Add: React.FC<Props> = ({
  emptyErrors,
  onSubmit,
  close,
  initialFields,
  View
}) => {
  const [fields, handleFieldChange] = useInputFields<typeof initialFields>(
    initialFields
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, updateErrors] = useFormErrors<typeof emptyErrors>(emptyErrors);

  const handleClose = () => {
    if (!loading) close();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(fields);
      close();
    } catch (err) {
      if (hasValidationErrors(err)) updateErrors(err.response.data.errors);
      setLoading(false);
    }
  };

  return (
    <Dialog open onClose={handleClose}>
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
