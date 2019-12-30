import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { ErrorProps } from "../textfield/Errorable";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import AuthGrid from "../../grid/Auth";
import LoadableButton from "../../../buttons/Loadable";
import DefaultError from "../../../errors/Default";

export type AuthFieldProps = ErrorProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type Props = {
  title: string;
  loading: boolean;
  buttonText: string;
  redirectText: string;
  redirectPath: string;
  generalError: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  form: {
    "& > *": {
      marginTop: theme.spacing(1),
      "&:nth-last-child(2)": {
        marginTop: theme.spacing(2)
      }
    }
  }
}));

const Form: React.FC<Props> = ({
  children,
  onSubmit,
  title,
  loading,
  buttonText,
  redirectText,
  redirectPath,
  generalError
}) => {
  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <AuthGrid className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        {children}
        {generalError && <DefaultError text={generalError} />}
        <LoadableButton loading={loading}>{buttonText}</LoadableButton>
        <Typography variant="body2">
          {`${redirectText} `}
          <Link component={RouterLink} to={redirectPath}>
            here
          </Link>
        </Typography>
      </form>
    </AuthGrid>
  );
};

export default Form;
