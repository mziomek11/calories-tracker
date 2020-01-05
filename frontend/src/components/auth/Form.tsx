import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { ErrorProps } from "../errors/TextField";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import AuthGrid from "./Grid";
import LoadableButton from "../buttons/Loadable";
import ErrorText from "../errors/Text";

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
    <AuthGrid component="main">
      <Box textAlign="center">
        <Typography variant="h3">{title}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {children}
          {generalError && <ErrorText text={generalError} />}
          <LoadableButton loading={loading}>{buttonText}</LoadableButton>
          <Typography variant="body2">
            {`${redirectText} `}
            <Link component={RouterLink} to={redirectPath}>
              here
            </Link>
          </Typography>
        </form>
      </Box>
    </AuthGrid>
  );
};

export default Form;
