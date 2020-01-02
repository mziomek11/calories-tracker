export type TableDialogProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: any;
  loading: boolean;
  fields: any;
  handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
