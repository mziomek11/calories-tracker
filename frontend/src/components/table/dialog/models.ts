export type TableDialogProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: any;
  loading: boolean;
};

export type TableFormDialogProps = TableDialogProps & {
  fields: any;
  handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TableDialogControllerProps = {
  collection: string;
  onSuccess: (obj: any) => void;
  close: VoidFunction;
};

export type TableDialogFormControllerProps = TableDialogControllerProps & {
  emptyErrors: { [key: string]: string };
  View: React.ComponentType<TableFormDialogProps>;
};
