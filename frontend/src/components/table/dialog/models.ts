export type DialogProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: any;
};

export type FormDialogProps = DialogProps & {
  fields: any;
  handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ControllerProps = {
  collection: string;
  onSuccess: (obj: any) => void;
  close: VoidFunction;
};

export type FormControllerProps = ControllerProps & {
  emptyErrors: { [key: string]: string };
  View: React.ComponentType<FormDialogProps>;
};
