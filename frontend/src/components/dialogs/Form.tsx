import React from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

import LoadableButton from "../buttons/Loadable";

export type FormDialogProps = {
  title?: string;
  contentText?: string;
  buttonText: string;
  loading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<FormDialogProps> = ({
  loading,
  title,
  contentText,
  buttonText,
  onSubmit,
  children
}) => {
  return (
    <form onSubmit={onSubmit}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {contentText && <DialogContentText>{contentText}</DialogContentText>}
        {children}
      </DialogContent>
      <DialogActions>
        <LoadableButton loading={loading}>{buttonText}</LoadableButton>
      </DialogActions>
    </form>
  );
};

export default Form;
