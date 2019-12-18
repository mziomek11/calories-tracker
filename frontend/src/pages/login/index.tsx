import React from "react";

import { useAuthForm } from "../../hooks";

import AuthForm from "../../components/layout/form/auth/Form";
import EmailField from "../../components/layout/form/auth/EmailField";
import PasswordField from "../../components/layout/form/auth/PasswordField";

type LoginData = {
  email: string;
  password: string;
};

const initData: LoginData = {
  email: "",
  password: ""
};

const RegisterPage = () => {
  const [fields, errors, loading, handleChange, login] = useAuthForm(
    initData,
    "/users/login"
  );

  return (
    <AuthForm
      title="Login"
      onSubmit={login}
      loading={loading}
      buttonText="Login"
      redirectText="Don't have an account? Create"
      redirectPath="/register"
      generalError={errors.general}
    >
      <EmailField
        value={fields.email}
        onChange={handleChange}
        err={errors.email}
      />
      <PasswordField
        value={fields.password}
        onChange={handleChange}
        err={errors.password}
      />
    </AuthForm>
  );
};

export default RegisterPage;
